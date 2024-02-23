import { Response } from "express";

export interface ReturnController {
    status: number,
    message: string,
    result: any
}

// export function sendReturn ({ message, status, result }: ReturnController) {
//     return { message: message, data: result, status };
// }


export function sendReturn (response: Response, status: number = 500, message: string, data?: any) {
    return response.status(status).json({ message: message, data: data })
}
