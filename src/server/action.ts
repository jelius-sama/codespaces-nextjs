"use server"

function asyncDelay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


export default async function testServerAction() {
    await asyncDelay(5000);
    return "Hello, World!"
}