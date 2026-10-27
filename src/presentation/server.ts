import express, { Router } from 'express';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { envs } from '../config/envs';

interface Options {
  port: number;
  routes: Router;
  public_path?: string;
}


export class Server {

  public readonly app = express();
  private serverListener?: any;
  private readonly port: number;
  private readonly publicPath: string;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port, routes, public_path = 'public' } = options;
    this.port = port;
    this.publicPath = public_path;
    this.routes = routes;
  }

  
  
  async start() {
    const allowedOrigins = envs.CORS_ORIGINS
      .split(',')
      .map((origin) => origin.trim())
      .filter(Boolean);

    const allowedOriginPatterns = [
      /^https:\/\/([a-z0-9-]+\.)*vercel\.app$/i,
      /^http:\/\/localhost:\d+$/i,
    ];

    const isAllowedOrigin = (origin: string) => {
      return allowedOrigins.includes(origin) || allowedOriginPatterns.some((pattern) => pattern.test(origin));
    };
    
   this.app.use(cors({
        origin: (origin, callback) => {
          if (!origin || isAllowedOrigin(origin)) {
            return callback(null, true);
          }

          return callback(new Error(`Origin ${ origin } not allowed by CORS`));
        },
        credentials: true // Only if you're using cookies or auth headers
    }));

    //* Security
    this.app.set('trust proxy', envs.TRUST_PROXY);
    this.app.use(helmet({
      // uploaded images are loaded cross-origin by the frontend
      crossOriginResourcePolicy: { policy: 'cross-origin' },
      contentSecurityPolicy: false,
    }));
    this.app.use('/api', rateLimit({
      windowMs: 15 * 60 * 1000,
      limit: 600,
      standardHeaders: true,
      legacyHeaders: false,
      message: { error: 'Too many requests, try again later' },
    }));

    //* Middlewares
    this.app.use( express.json() ); // raw
    this.app.use( express.urlencoded({ extended: true }) ); // x-www-form-urlencoded

    //* Public Folder
    this.app.use( express.static( this.publicPath ) );

    //* Routes
    this.app.use( this.routes );

    //* SPA /^\/(?!api).*/  <== Únicamente si no empieza con la palabra api
    this.app.get('*', (req, res) => {
      const indexPath = path.join( __dirname + `../../../${ this.publicPath }/index.html` );
      res.sendFile(indexPath);
    });
    

    this.serverListener = this.app.listen(this.port, () => {
      console.log(`Server running on port ${ this.port }`);
    });

  }

  public close() {
    this.serverListener?.close();
  }

}

