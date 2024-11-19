import { NextResponse } from 'next/server'
import { exec } from 'child_process'
import fs from 'fs/promises'
import path from 'path'
import { promisify } from 'util'

const execAsync = promisify(exec)
const TEMP_DIR = path.join(process.cwd(), 'tmp')

export async function POST(req: Request) {
    try {
        const { repoUrl } = await req.json()

        if (!repoUrl || typeof repoUrl !== 'string') {
            return NextResponse.json({ error: 'Invalid repository URL' }, { status: 400 })
        }

        const projectName = path.basename(repoUrl, '.git')
        const projectPath = path.join(TEMP_DIR, projectName)

        await fs.mkdir(TEMP_DIR, { recursive: true })

        try {
            await execAsync(`git clone --depth 1 ${repoUrl} ${projectPath}`)
        } catch (error) {
            console.error('Error cloning repository:', error)
            return NextResponse.json({ error: 'Failed to clone repository' }, { status: 500 })
        }

        const structure = await readProjectStructure(projectPath)

        await fs.rm(projectPath, { recursive: true, force: true })

        return NextResponse.json({ structure })
    } catch (error) {
        console.error('Error processing request:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

async function readProjectStructure(dir: string): Promise<any> {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    const structure: any = { name: path.basename(dir), type: 'folder', children: [] }

    for (const entry of entries) {
        if (entry.name === '.git' || entry.name === 'node_modules') continue

        const fullPath = path.join(dir, entry.name)
        if (entry.isDirectory()) {
            structure.children.push(await readProjectStructure(fullPath))
        } else {
            const content = await fs.readFile(fullPath, 'utf-8')
            structure.children.push({ name: entry.name, type: 'file', content })
        }
    }

    return structure
}