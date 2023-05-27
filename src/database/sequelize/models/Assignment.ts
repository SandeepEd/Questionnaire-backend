import { Association, DataTypes, Model } from "sequelize";
import { IAssignment } from "../../../types";
import { QuestionsModel } from "./questions";
import { OptionsModel } from "./options";
import { sequelize } from "../..";
import { UserModel } from "./user";

export class AssignmentModel extends Model<IAssignment> implements IAssignment {
    declare id: number;
    declare question_id: number;
    declare option_id: number;
    declare user_id: number;
    declare response_id: number;
    declare question: QuestionsModel;
    declare options: OptionsModel[];

    static QuestionAssociation: Association<AssignmentModel, QuestionsModel>;
    static OptionAssociation: Association<AssignmentModel, OptionsModel>;
    static UserAssociation: Association<AssignmentModel, UserModel>
    static ResponseAssociation: Association<AssignmentModel, OptionsModel>

    static associate() {
        this.QuestionAssociation = this.belongsTo(QuestionsModel, {
            foreignKey: 'question_id',
            as: 'question'
        })
        this.OptionAssociation = this.belongsTo(OptionsModel, {
            foreignKey: 'option_id',
            as: 'option'
        })
        this.UserAssociation = this.belongsTo(UserModel, {
            foreignKey: 'user_id',
            as: 'user'
        })
        this.ResponseAssociation = this.belongsTo(OptionsModel, {
            foreignKey: 'response_id',
            as: 'response'
        })
    }
}

AssignmentModel.init({
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
    },
    user_id: {
        field: 'user_id',
        type: DataTypes.INTEGER,
        allowNull: false
    },
    response_id: {
        field: 'response_id',
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    tableName: 'Assignment',
    modelName: 'Assignment',
    schema: `questionnaire`,
    sequelize,
    paranoid: true,
    timestamps: false,
    underscored: true
})