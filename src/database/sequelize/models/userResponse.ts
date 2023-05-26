import { Association, DataTypes, Model } from "sequelize";
import { IUserResponse } from "../../../types";
import { UserModel } from "./user";
import { QuestionsModel } from "./questions";
import { OptionsModel } from "./options";
import { sequelize } from "../../../database";

export class UserResponses extends Model<IUserResponse> implements IUserResponse {
    declare id: number;
    declare user_id: number;
    declare question_id: number;
    declare option_id: number;

    static UserAssociation: Association<UserResponses, UserModel>;
    static QuestionAssociation: Association<UserResponses, QuestionsModel>;
    static OptionAssociation: Association<UserResponses, OptionsModel>;

    static associate() {
        this.UserAssociation = this.belongsTo(UserModel, {
            foreignKey: 'user_id',
            as: 'user'
        })
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

UserResponses.init({
    id: {
        field: 'id',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        autoIncrementIdentity: true,
        primaryKey: true,
    },
    user_id: {
        field: 'user_id',
        type: DataTypes.INTEGER,
        allowNull: false
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
    tableName: 'UserResponses',
    modelName: 'UserResponses',
    schema: `questionnaire`,
    sequelize,
    paranoid: true,
    timestamps: false
})
