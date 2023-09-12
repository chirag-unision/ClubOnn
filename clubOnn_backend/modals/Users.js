module.exports= (sequelize, DataTypes)=> {
    const Users= sequelize.define('users', {
        uid: DataTypes.STRING,
        email: DataTypes.STRING,
        mobile: DataTypes.BIGINT,
        name: DataTypes.STRING,
        dateofbirth: DataTypes.DATE,
        interests: DataTypes.STRING,
        clubsjoined: DataTypes.STRING,
        clubsfollowing: DataTypes.STRING
    });
}