import { DataTypes, Model } from "sequelize";
import { IUser } from "../../../modules/user/IUserRepo";
import { sequelize } from '../../index'

export class UserModel extends Model<IUser, Omit<IUser, 'id'>> implements IUser {
    declare id: number;
    declare name: string;
    declare email: string;
    declare password: string;
    declare assignment_submitted: boolean;
}

UserModel.init({
    id: {
        field: 'id',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        autoIncrementIdentity: true,
        primaryKey: true,
    },
    name: {
        field: 'name',
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        field: 'email',
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        field: 'password',
        type: DataTypes.STRING,
        allowNull: false
    },
    assignment_submitted: {
        field: 'assignment_submitted',
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: 'Users',
    modelName: 'Users',
    schema: `identity`,
    sequelize,
    paranoid: true,
    timestamps: false,
    underscored: true
})