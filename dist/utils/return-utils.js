"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendReturn = void 0;
// export function sendReturn ({ message, status, result }: ReturnController) {
//     return { message: message, data: result, status };
// }
function sendReturn(response, status = 500, message, data) {
    return response.status(status).json({ message: message, data: data });
}
exports.sendReturn = sendReturn;
