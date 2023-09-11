// import * as dotenv from 'dotenv';
// dotenv.config({ path: `${__dirname}/.env.${process.env.NODE_ENV}` });

// var dbConfig = {
//   type: 'mysql',
//   logging: false,
//   synchronize: false,
//   database: process.env.DB_DATABASE,
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
// };

// switch (process.env.NODE_ENV) {
//   case 'development':
//     Object.assign(dbConfig, {
//       entities: ['src/**/**/*.entity.ts'],
//       migrations: ['src/database/migrations/*.ts'],
//       seeds: ['src/database/seeders/**/*{.ts,.js}'],
//       factories: ['src/database/factories/**/*{.ts,.js}'],
//       synchronize: true,
//       cli: {
//         migrationsDir: 'src/database/migrations',
//       },
//     });
//     break;
//   case 'production':
//     Object.assign(dbConfig, {
//       entities: [
//         'dist/src/modules/**/*.entity.js',
//         'dist/src/**/**/*.entity.js',
//       ],
//       migrations: ['dist/src/database/migrations/*.js'],
//       seeds: ['dist/src/database/seeders/**/*.js'],
//       factories: ['dist/src/database/factories/**/*.js'],
//       synchronize: false,
//       cli: {
//         migrationsDir: 'dist/src/database/migrations',
//       },
//     });
//     break;
//   default:
//     throw new Error('unknown environment');
// }

// module.exports = dbConfig;
