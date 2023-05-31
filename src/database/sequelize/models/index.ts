import { UserModel } from './user';
import { QuestionsModel } from './questions';
import { OptionsModel } from './options';
import { AssignmentModel } from './Assignment';

QuestionsModel.associate();
AssignmentModel.associate();

export { UserModel, QuestionsModel, OptionsModel, AssignmentModel };
