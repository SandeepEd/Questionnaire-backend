import { sequelize } from "../../../database";
import { Association, DataTypes, Model, Options } from "sequelize";
import { IQuestions } from "../../../types";
import { OptionsModel as OptionsModel } from "./options";

export class QuestionsModel extends Model<IQuestions> implements IQuestions {
    declare id: number;
    declare question_text: string;
    declare correct_option_id: number;

    static OptionAssociation: Association<QuestionsModel, OptionsModel>;

    static associate() {
        this.OptionAssociation = this.hasMany(OptionsModel, {
            foreignKey: 'correct_option',
            as: 'options'
        })
    }
}

QuestionsModel.init({
    id: {
        field: 'id',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        autoIncrementIdentity: true,
        primaryKey: true,
    },
    question_text: {
        field: 'question_text',
        type: DataTypes.STRING,
        allowNull: false
    },
    correct_option_id: {
        field: 'correct_option_id',
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'Questions',
    modelName: 'Questions',
    schema: `questionnaire`,
    sequelize,
    paranoid: true,
    timestamps: false
})