import { sequelize } from "../../../database";
import { DataTypes, Model } from "sequelize";
import { IOptions } from "../../../types";
import { AssignmentModel } from "./Assignment";
import { QuestionsModel } from "./questions";

export class OptionsModel extends Model<IOptions> implements IOptions {
    declare id: number;
    declare option_text: string;

    static associate() {
        this.belongsToMany(QuestionsModel, {
            through: {
                model: AssignmentModel,
                unique: false,
            },
            foreignKey: 'option_id',
            as: 'questions'
        });
    }
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
    timestamps: false,
    underscored: true
})
