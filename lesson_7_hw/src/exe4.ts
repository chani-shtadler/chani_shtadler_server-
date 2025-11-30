import { promises } from 'fs';

async function readFileAsync(filePath: string): Promise<string> {
    const content = await promises.readFile(filePath, 'utf8');
    //promises.writeFile(filePath, content);
    console.log("File content:", content);
    return content;
} 

async function readAllFile()
{
    await readFileAsync("src/Texts/file1.txt")
    await readFileAsync("src/Texts/file2.txt")
    await readFileAsync("src/Texts/file3.txt")
}

console.log("after file1");
readAllFile().then(() => console.log("finish all"));
