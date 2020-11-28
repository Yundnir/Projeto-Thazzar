module.exports = {
  production: {
    // username é o nome de usuário no MySQL Workbench;
    // 
    username: 'bd_sqlThazzar', 
    password: '#Gf51004386818',
    database: 'bdThazzar',
    host: 'URL_DO_SEU_BANCO_DE_DADOS.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 
