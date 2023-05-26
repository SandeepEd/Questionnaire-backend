import { sequelize } from "../../../database";
import { DataTypes, Model } from "sequelize";
import { IOptions } from "../../../types";

export class OptionsModel extends Model<IOptions> implements IOptions {
    declare id: number;
    declare option_text: string;
}   

OptionsModel.init({
    id: {
        field: 'id',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        autoIncrementIdentity: true,
        primaryKey: true,
    },
    option_text: {
        field: 'option_text',
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Options',
    modelName: 'Options',
    schema: `questionnaire`,
    sequelize,
    paranoid: true,
    timestamps: false
})
