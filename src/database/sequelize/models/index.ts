import { UserModel } from "./user";
import { UserResponses } from "./userResponse";
import { QuestionsModel } from "./questions";
import { OptionsModel } from "./options";
import { AssignmentModel } from "./Assignment";

UserResponses.associate()
QuestionsModel.associate()
AssignmentModel.associate()

export { UserModel, UserResponses, QuestionsModel, OptionsModel, AssignmentModel }