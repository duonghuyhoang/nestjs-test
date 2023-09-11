// import { MigrationInterface, QueryRunner, Table } from 'typeorm';

// export class CreateUsersTable1693471648656 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.createTable(
//       new Table({
//         name: 'users',
//         columns: [
//           {
//             name: 'id',
//             type: 'integer',
//             isPrimary: true,
//             isGenerated: true,
//             generationStrategy: 'increment',
//           },
//           {
//             name: 'name',
//             type: 'varchar',
//             length: '255',
//           },
//           {
//             name: 'email',
//             type: 'varchar',
//             length: '255',
//             isUnique: true,
//           },
//           {
//             name: 'created_at',
//             type: 'timestamp',
//             default: 'CURRENT_TIMESTAMP',
//           },
//           {
//             name: 'updated_at',
//             type: 'timestamp',
//             default: 'CURRENT_TIMESTAMP',
//             onUpdate: 'CURRENT_TIMESTAMP',
//           },
//           // Add more columns as needed
//         ],
//       }),
//     );
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.dropTable('users');
//   }
// }
