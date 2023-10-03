module.exports= (sequelize, DataTypes)=> {
    const Clubs= sequelize.define('clubs', {
        clubid: DataTypes.STRING,
        title: DataTypes.STRING,
        category: DataTypes.INTEGER,
        description: DataTypes.STRING,
        members: DataTypes.INTEGER,
        memberlist: DataTypes.STRING,
        followers: DataTypes.INTEGER,
        followerlist: DataTypes.STRING,
        clubleads: DataTypes.STRING,
        datahash: DataTypes.STRING
    });
    return Clubs;
}