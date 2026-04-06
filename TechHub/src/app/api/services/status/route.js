import { NextResponse } from 'next/server';
import { execSync } from 'child_process';
import path from 'path';
const OPENCLAUDE_ROOT = path.join(process.cwd(), '../../..');
export async function GET() {
  try {
    const result = execSync('bash opctl.sh status', { cwd: OPENCLAUDE_ROOT, encoding: 'utf-8', timeout: 10000 });
    return NextResponse.json({ success: true, output: result.trim() });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}