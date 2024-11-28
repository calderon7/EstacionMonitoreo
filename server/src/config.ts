import { config } from 'dotenv'
config()

export const PORT = process.env.PORT || 5003
export const DB_TYPE = process.env.DB_TYPE
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'root'
export const DB_USERNAME = process.env.DB_USERNAME || 'test'
export const DB_PORT = process.env.DB_PORT || '3306'
export const DB_SYNCHRONIZE = process.env.DB_SYNCHRONIZE || false
export const DB_ENTITIES_ROUTE = process.env.DB_ENTITIES_ROUTE
export const CHARACTERS =
  process.env.CHARACTERS ||
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
export const EMAIL_SERVICE_URL = process.env.EMAIL_SERVICE_URL
export const URL_PORTAL_WEB = process.env.URL_PORTAL_WEB
export const NODE_DEV_URL = process.env.NODE_DEV_URL
export const NODE_PROD_URL = process.env.NODE_PROD_URL
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET
export const EMAIL = process.env.EMAIL
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD
