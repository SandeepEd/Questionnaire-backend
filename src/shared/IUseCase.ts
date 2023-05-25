export interface IUseCase<Input, Return> {
    execute(input: Input): Promise<Return>;
}