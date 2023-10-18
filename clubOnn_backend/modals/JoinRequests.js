module.exports= (sequelize, DataTypes)=> {
    const JoinRequests= sequelize.define('joinrequests', {
        requestid: DataTypes.STRING,
        userid: DataTypes.STRING,
        clubid: DataTypes.STRING,
        message: DataTypes.STRING,
        status: DataTypes.STRING
    });
    return JoinRequests;
}