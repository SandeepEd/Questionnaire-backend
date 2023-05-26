import { UserModel } from "./user";
import { UserResponses } from "./userResponse";
import { QuestionsModel } from "./questions";
import { OptionsModel } from "./options";
import { QuestionOptionModel } from "./QuestionOption";

UserResponses.associate()
QuestionsModel.associate()
QuestionOptionModel.associate()

export { UserModel, UserResponses, QuestionsModel, OptionsModel, QuestionOptionModel }