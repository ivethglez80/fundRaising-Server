const { DataTypes } = require ("sequelize");

module.exports = (sequelize) => {
    sequelize.define (
        "FundGoal",
        {
            totalAmount: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            newEntry: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            timestamps: true
        }
    )
};



