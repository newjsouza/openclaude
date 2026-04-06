import { NextResponse } from 'next/server';
import { execSync } from 'child_process';
import path from 'path';
const OPENCLAUDE_ROOT = path.join(process.cwd(), '../../..');
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action') || 'list';
  try {
    const result = execSync(`node scripts/task-manager.js ${action}`, { cwd: OPENCLAUDE_ROOT, encoding: 'utf-8', timeout: 10000 });
    return NextResponse.json({ success: true, output: result.trim() });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
export async function POST(request) {
  const body = await request.json();
  const { name, description, priority = 'medium' } = body;
  if (!name) return NextResponse.json({ success: false, error: 'Nome é obrigatório' }, { status: 400 });
  try {
    const result = execSync(`node scripts/task-manager.js create "${name}" "${description || ''}" --priority ${priority}`, { cwd: OPENCLAUDE_ROOT, encoding: 'utf-8', timeout: 10000 });
    return NextResponse.json({ success: true, output: result.trim() });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}