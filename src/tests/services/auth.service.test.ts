import { createUser, doAuthorisation } from "../../services/auth.service";
import * as repository from "../../repository/auth.repository";
import ExceptionType from "../../helper/exceptions.type";

describe("createUser function", () => {
    test("should return succes", async () => {
        const mock = jest.spyOn(repository, "createUserDB")

        mock.mockResolvedValue()

        await createUser("name", "surname", "hashpwd", "email@mail.ru")

        expect(mock).toHaveBeenCalled()
    })
})

// describe("doAuthorisation function", () => {
//     test("should return succes", async () => {
//         const mock = jest.spyOn(repository, "getUserByEmailDB")

//         mock.mockResolvedValue([{ name: "name", surname: "surname", pwd: "pwd12345", email: "email@mail.ru"}])

//         await doAuthorisation("hashpwd", "email@mail.ru")

//         expect(mock).toHaveBeenCalled()
//     })
// })