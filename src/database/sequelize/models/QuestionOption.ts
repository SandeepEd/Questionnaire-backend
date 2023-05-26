import { Association, DataTypes, Model } from "sequelize";
import { IQuestionOption } from "../../../types";
import { QuestionsModel } from "./questions";
import { OptionsModel } from "./options";
import { sequelize } from "../../../database";

export class QuestionOptionModel extends Model<IQuestionOption> implements IQuestionOption {
    declare id: number;
    declare question_id: number;
    declare option_id: number;

    static QuestionAssociation: Association<QuestionOptionModel, QuestionsModel>;
    static OptionAssociation: Association<QuestionOptionModel, OptionsModel>;

    static associate() {
        this.QuestionAssociation = this.belongsTo(QuestionsModel, {
            foreignKey: 'question_id',
            as: 'question'
        })
        this.OptionAssociation = this.belongsTo(OptionsModel, {
            foreignKey: 'option_id',
            as: 'option'
        })
    }
}

QuestionOptionModel.init({
    id: {
        field: 'id',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        autoIncrementIdentity: true,
        primaryKey: true,
    },
    question_id: {
        field: 'question_id',
        type: DataTypes.INTEGER,
        allowNull: false
    },
    option_id: {
        field: 'option_id',
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'QuestionOption',
    modelName: 'QuestionOption',
    schema: `questionnaire`,
    sequelize,
    paranoid: true,
    timestamps: false
})