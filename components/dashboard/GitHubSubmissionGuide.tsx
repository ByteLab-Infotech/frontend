'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  FileCode,
  Folder,
  GitBranch,
  Copy,
  Check
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'bash' }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono">
        <code>{code}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded text-gray-300 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
        title="Copy to clipboard"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-400" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
    </div>
  );
};

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  icon?: React.ReactNode;
}

const ExpandableSection: React.FC<ExpandableSectionProps> = ({ 
  title, 
  children, 
  defaultOpen = false,
  icon 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-slate-grey hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-electric-blue">{icon}</span>}
          <h3 className="text-h3 font-heading font-semibold text-navy">{title}</h3>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-white">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface InfoBoxProps {
  type: 'info' | 'warning' | 'success' | 'error';
  children: React.ReactNode;
}

const InfoBox: React.FC<InfoBoxProps> = ({ type, children }) => {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
  };

  const icons = {
    info: <AlertCircle className="w-5 h-5" />,
    warning: <AlertCircle className="w-5 h-5" />,
    success: <CheckCircle2 className="w-5 h-5" />,
    error: <AlertCircle className="w-5 h-5" />,
  };

  return (
    <div className={`border rounded-lg p-4 flex gap-3 ${styles[type]}`}>
      <div className="flex-shrink-0 mt-0.5">{icons[type]}</div>
      <div className="flex-1 text-sm leading-relaxed">{children}</div>
    </div>
  );
};

export const GitHubSubmissionGuide: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="bg-gradient-to-br from-electric-blue/5 to-transparent rounded-xl p-6 border border-electric-blue/20">
        <h2 className="text-display font-heading font-bold text-navy mb-3">
          GitHub Submission Guide
        </h2>
        <p className="text-body-lg text-gray-700 leading-relaxed">
          Complete step-by-step guide to submit your internship tasks via GitHub. Follow this guide carefully to ensure your submission is accepted.
        </p>
      </div>

      {/* Prerequisites */}
      <ExpandableSection 
        title="1. Prerequisites" 
        icon={<CheckCircle2 className="w-5 h-5" />}
        defaultOpen={true}
      >
        <div className="space-y-4">
          <div>
            <h4 className="text-h3 font-heading font-semibold text-navy mb-3">What You Need</h4>
            <ul className="list-disc list-inside space-y-2 text-body text-gray-700 ml-2">
              <li>A GitHub account (free) - <a href="https://github.com/signup" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline">Sign up here</a></li>
              <li>Git installed on your computer</li>
              <li>Basic knowledge of command line (or use GitHub Desktop)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Install Git</h4>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-sm mb-1">Windows:</p>
                <p className="text-sm text-gray-600 mb-2">Download from <a href="https://git-scm.com/download/win" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline">git-scm.com</a> or use <a href="https://desktop.github.com/" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline">GitHub Desktop</a></p>
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">Mac:</p>
                <CodeBlock code="brew install git" />
                <p className="text-sm text-gray-600 mt-2">Or download from <a href="https://git-scm.com/download/mac" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline">git-scm.com</a></p>
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">Linux:</p>
                <CodeBlock code="sudo apt-get install git" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Configure Git (First Time Only)</h4>
            <CodeBlock code={`git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"`} />
          </div>
        </div>
      </ExpandableSection>

      {/* Repository Setup */}
      <ExpandableSection 
        title="2. Create GitHub Repository" 
        icon={<GitBranch className="w-5 h-5" />}
        defaultOpen={true}
      >
        <div className="space-y-4">
          <div>
            <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Step-by-Step</h4>
            <ol className="list-decimal list-inside space-y-3 text-body text-gray-700 ml-2">
              <li>Go to <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline">github.com</a> and sign in</li>
              <li>Click the <strong>"+"</strong> icon in the top right, then select <strong>"New repository"</strong></li>
              <li>Enter a repository name (e.g., "bytelab-internship-tasks")</li>
              <li><strong>IMPORTANT:</strong> Set repository visibility to <strong>"Public"</strong> (required for validation)</li>
              <li><strong>DO NOT</strong> check "Initialize with README" (we'll add it manually)</li>
              <li>Click <strong>"Create repository"</strong></li>
            </ol>
          </div>

          <InfoBox type="warning">
            <strong>Important:</strong> Your repository MUST be public. Private repositories cannot be validated by our system.
          </InfoBox>

          <div>
            <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Clone Repository Locally</h4>
            <p className="text-body text-gray-700 mb-3">After creating the repository, GitHub will show you commands. Copy the repository URL and run:</p>
            <CodeBlock code={`git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name`} />
            <p className="text-sm text-gray-600 mt-2">
              Replace <code className="bg-gray-100 px-1 rounded">your-username</code> and <code className="bg-gray-100 px-1 rounded">your-repo-name</code> with your actual values.
            </p>
          </div>
        </div>
      </ExpandableSection>

      {/* Folder Structure */}
      <ExpandableSection 
        title="3. Required Folder Structure" 
        icon={<Folder className="w-5 h-5" />}
        defaultOpen={true}
      >
        <div className="space-y-4">
          <div>
            <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Exact Structure Required</h4>
            <div className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
              <div>your-repo-name/</div>
              <div className="ml-2 sm:ml-4">├── README.md <span className="text-green-400">(REQUIRED in root)</span></div>
              <div className="ml-2 sm:ml-4">├── Task-1/ <span className="text-yellow-400">(at least 2 files)</span></div>
              <div className="ml-4 sm:ml-8">│   ├── file1.js</div>
              <div className="ml-4 sm:ml-8">│   ├── file2.css</div>
              <div className="ml-4 sm:ml-8">│   └── ...</div>
              <div className="ml-2 sm:ml-4">├── Task-2/ <span className="text-yellow-400">(at least 2 files)</span></div>
              <div className="ml-4 sm:ml-8">│   ├── file1.py</div>
              <div className="ml-4 sm:ml-8">│   ├── file2.txt</div>
              <div className="ml-4 sm:ml-8">│   └── ...</div>
              <div className="ml-2 sm:ml-4">├── Task-3/</div>
              <div className="ml-2 sm:ml-4">└── ...</div>
            </div>
          </div>

          <InfoBox type="error">
            <strong>Critical Rules:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Folder names must be exactly: <code className="bg-red-100 px-1 rounded">Task-1</code>, <code className="bg-red-100 px-1 rounded">Task-2</code>, <code className="bg-red-100 px-1 rounded">Task-3</code> (case-sensitive, with hyphen)</li>
              <li>README.md must be in the root directory, NOT inside task folders</li>
              <li>Each task folder must contain at least 2 files</li>
              <li>Task numbers correspond to your assigned tasks in order</li>
            </ul>
          </InfoBox>

          <div>
            <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Create Folders</h4>
            <p className="text-body text-gray-700 mb-3">In your local repository directory, create folders for each task:</p>
            <CodeBlock code={`# Windows
mkdir Task-1 Task-2 Task-3

# Mac/Linux
mkdir Task-1 Task-2 Task-3`} />
          </div>

          <div>
            <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Domain-Specific Examples</h4>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-sm mb-2">Web Development:</p>
                <div className="bg-gray-50 p-3 rounded font-mono text-xs">
                  <div>Task-1/</div>
                  <div className="ml-4">├── index.html</div>
                  <div className="ml-4">├── styles.css</div>
                  <div className="ml-4">└── script.js</div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-sm mb-2">Data Science:</p>
                <div className="bg-gray-50 p-3 rounded font-mono text-xs">
                  <div>Task-1/</div>
                  <div className="ml-4">├── data_analysis.py</div>
                  <div className="ml-4">├── dataset.csv</div>
                  <div className="ml-4">└── requirements.txt</div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-sm mb-2">Mobile Development:</p>
                <div className="bg-gray-50 p-3 rounded font-mono text-xs">
                  <div>Task-1/</div>
                  <div className="ml-4">├── App.js</div>
                  <div className="ml-4">├── package.json</div>
                  <div className="ml-4">└── components/</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ExpandableSection>

      {/* Git Commands */}
      <ExpandableSection 
        title="4. Essential Git Commands" 
        icon={<FileCode className="w-5 h-5" />}
      >
        <div className="space-y-4">
          <div>
            <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Initial Setup (One Time)</h4>
            <CodeBlock code={`# If you didn't clone, initialize locally
git init
git remote add origin https://github.com/your-username/your-repo-name.git`} />
          </div>

          <div>
            <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Regular Workflow</h4>
            <CodeBlock code={`# 1. Check what files changed
git status

# 2. Add all files to staging
git add .

# 3. Commit with a descriptive message
git commit -m "Add Task-1 files"

# 4. Push to GitHub
git push origin main`} />
            <p className="text-sm text-gray-600 mt-2">
              <strong>Note:</strong> If your default branch is <code className="bg-gray-100 px-1 rounded">master</code> instead of <code className="bg-gray-100 px-1 rounded">main</code>, use <code className="bg-gray-100 px-1 rounded">git push origin master</code>
            </p>
          </div>

          <div>
            <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Useful Commands</h4>
            <CodeBlock code={`# View commit history
git log

# Check current status
git status

# See what branch you're on
git branch`} />
          </div>

          <InfoBox type="info">
            <strong>Tip:</strong> Make commits regularly (daily or every few days) rather than all at once. This shows consistent work and helps meet commit requirements.
          </InfoBox>
        </div>
      </ExpandableSection>

      {/* Step-by-Step Process */}
      <ExpandableSection 
        title="5. Complete Submission Process" 
        icon={<CheckCircle2 className="w-5 h-5" />}
        defaultOpen={true}
      >
        <div className="space-y-6">
          <div>
            <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Step 1: Create Repository on GitHub</h4>
            <p className="text-body text-gray-700 mb-2">Follow the steps in Section 2 to create a public repository.</p>
          </div>

          <div>
            <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Step 2: Clone Repository</h4>
            <CodeBlock code={`git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name`} />
          </div>

          <div>
            <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Step 3: Create Task Folders</h4>
            <CodeBlock code={`mkdir Task-1 Task-2 Task-3`} />
            <p className="text-sm text-gray-600 mt-2">Create folders for all your assigned tasks.</p>
          </div>

          <div>
            <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Step 4: Add Task Files</h4>
            <p className="text-body text-gray-700 mb-2">Copy your completed task files into their respective folders:</p>
            <ul className="list-disc list-inside text-body text-gray-700 ml-2 space-y-1">
              <li>Task 1 files → Task-1/ folder</li>
              <li>Task 2 files → Task-2/ folder</li>
              <li>Task 3 files → Task-3/ folder</li>
              <li>And so on...</li>
            </ul>
          </div>

          <div>
            <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Step 5: Create README.md</h4>
            <p className="text-body text-gray-700 mb-3">Create a README.md file in the root directory (not inside task folders):</p>
            <CodeBlock code={`# Your Internship Project

## Description
Brief description of your internship project.

## Technologies Used
- Technology 1
- Technology 2

## Setup Instructions
How to run your project.

## Tasks Completed
- Task 1: Description
- Task 2: Description
- Task 3: Description`} />
            <p className="text-sm text-gray-600 mt-2">
              <a href="https://www.markdownguide.org/" target="_blank" rel="noopener noreferrer" className="text-electric-blue hover:underline">
                Learn Markdown syntax →
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Step 6: Make Your First Commit</h4>
            <CodeBlock code={`git add .
git commit -m "Initial commit with all tasks"
git push origin main`} />
          </div>

          <div>
            <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Step 7: Make Additional Commits (IMPORTANT!)</h4>
            <InfoBox type="warning">
              <strong>Commit Requirements:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>30-day internship:</strong> Minimum 10 commits</li>
                <li><strong>45-day internship:</strong> Minimum 20 commits</li>
                <li><strong>90-day internship:</strong> Minimum 40 commits</li>
                <li>Commits must be spread over multiple days (not all on the same day)</li>
                <li>All commits must be made after your batch start date</li>
              </ul>
            </InfoBox>
            <p className="text-body text-gray-700 mb-3 mt-4">Make commits over several days:</p>
            <CodeBlock code={`# Day 1: Commit Task 1
git add Task-1/
git commit -m "Complete Task 1 - [description]"
git push origin main

# Day 2: Commit Task 2
git add Task-2/
git commit -m "Complete Task 2 - [description]"
git push origin main

# Day 3: Make improvements
git add .
git commit -m "Update Task 1 with improvements"
git push origin main

# Continue making commits over multiple days...`} />
          </div>

          <div>
            <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Step 8: Verify Repository</h4>
            <div className="bg-slate-grey p-4 rounded-lg">
              <p className="font-semibold text-sm mb-3">Checklist before submitting:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Repository is set to <strong>Public</strong> (Settings → Change visibility)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  README.md exists in root directory
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  All Task folders are named correctly (Task-1, Task-2, etc.)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Each task folder has at least 2 files
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Minimum commits made (based on your duration)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Commits are spread over multiple days
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Step 9: Submit in Dashboard</h4>
            <ol className="list-decimal list-inside space-y-2 text-body text-gray-700 ml-2">
              <li>Go to your Student Dashboard</li>
              <li>Scroll to "GitHub Submission" section</li>
              <li>Copy your repository URL (e.g., <code className="bg-gray-100 px-1 rounded">https://github.com/username/repo-name</code>)</li>
              <li>Paste the URL in the input field</li>
              <li>Click "Submit GitHub Repository"</li>
              <li>Wait for validation (may take a few moments)</li>
            </ol>
          </div>
        </div>
      </ExpandableSection>

      {/* Validation Requirements */}
      <ExpandableSection 
        title="6. Validation Requirements" 
        icon={<AlertCircle className="w-5 h-5" />}
      >
        <div className="space-y-4">
          <InfoBox type="error">
            <strong>All of these requirements MUST be met for your submission to be accepted:</strong>
          </InfoBox>

          <div className="space-y-3">
            <Card className="p-4">
              <h4 className="font-semibold text-navy mb-2">1. Repository Visibility</h4>
              <p className="text-sm text-gray-700">Repository must be <strong>Public</strong>. Private repositories cannot be validated.</p>
            </Card>

            <Card className="p-4">
              <h4 className="font-semibold text-navy mb-2">2. README.md File</h4>
              <p className="text-sm text-gray-700">Must exist in the <strong>root directory</strong> (not inside task folders).</p>
            </Card>

            <Card className="p-4">
              <h4 className="font-semibold text-navy mb-2">3. Folder Structure</h4>
              <p className="text-sm text-gray-700 mb-2">Folders must be named exactly:</p>
              <ul className="list-disc list-inside text-sm text-gray-700 ml-2">
                <li><code className="bg-gray-100 px-1 rounded">Task-1</code>, <code className="bg-gray-100 px-1 rounded">Task-2</code>, <code className="bg-gray-100 px-1 rounded">Task-3</code>, etc.</li>
                <li>Case-sensitive (capital T, lowercase ask, hyphen, number)</li>
                <li>One folder per assigned task</li>
              </ul>
            </Card>

            <Card className="p-4">
              <h4 className="font-semibold text-navy mb-2">4. Files in Task Folders</h4>
              <p className="text-sm text-gray-700">Each task folder must contain <strong>at least 2 files</strong>.</p>
            </Card>

            <Card className="p-4">
              <h4 className="font-semibold text-navy mb-2">5. Commit Requirements</h4>
              <div className="text-sm text-gray-700 space-y-2">
                <p><strong>Minimum commits based on duration:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>30-day internship: <strong>10 commits</strong> minimum</li>
                  <li>45-day internship: <strong>20 commits</strong> minimum</li>
                  <li>90-day internship: <strong>40 commits</strong> minimum</li>
                </ul>
                <p className="mt-2"><strong>Additional requirements:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>All commits must be made <strong>after your batch start date</strong></li>
                  <li>Commits must be <strong>spread over multiple days</strong> (not all on the same day)</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </ExpandableSection>

      {/* Common Errors */}
      <ExpandableSection 
        title="7. Common Mistakes & Solutions" 
        icon={<AlertCircle className="w-5 h-5" />}
      >
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-red-600 mb-2">Error: "Repository does not exist or is private"</h4>
            <p className="text-sm text-gray-700 mb-2"><strong>Solution:</strong></p>
            <ol className="list-decimal list-inside text-sm text-gray-700 ml-2 space-y-1">
              <li>Go to your repository on GitHub</li>
              <li>Click <strong>Settings</strong> (top right of repository page)</li>
              <li>Scroll down to <strong>"Danger Zone"</strong></li>
              <li>Click <strong>"Change visibility"</strong> → Select <strong>"Make public"</strong></li>
              <li>Confirm the change</li>
            </ol>
          </div>

          <div>
            <h4 className="font-semibold text-red-600 mb-2">Error: "README.md not found"</h4>
            <p className="text-sm text-gray-700 mb-2"><strong>Solution:</strong></p>
            <ul className="list-disc list-inside text-sm text-gray-700 ml-2 space-y-1">
              <li>Create a file named <code className="bg-gray-100 px-1 rounded">README.md</code> in the root directory</li>
              <li>Make sure it's not inside any Task folder</li>
              <li>Commit and push the file: <code className="bg-gray-100 px-1 rounded">git add README.md && git commit -m "Add README" && git push</code></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-red-600 mb-2">Error: "Task folder 'Task-1' not found"</h4>
            <p className="text-sm text-gray-700 mb-2"><strong>Solution:</strong></p>
            <ul className="list-disc list-inside text-sm text-gray-700 ml-2 space-y-1">
              <li>Check folder name is exactly <code className="bg-gray-100 px-1 rounded">Task-1</code> (capital T, lowercase ask, hyphen, number)</li>
              <li>Not <code className="bg-gray-100 px-1 rounded">task-1</code>, <code className="bg-gray-100 px-1 rounded">Task_1</code>, or <code className="bg-gray-100 px-1 rounded">task1</code></li>
              <li>Rename folder if needed and commit the change</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-red-600 mb-2">Error: "Task folder must contain at least 2 files"</h4>
            <p className="text-sm text-gray-700 mb-2"><strong>Solution:</strong></p>
            <ul className="list-disc list-inside text-sm text-gray-700 ml-2 space-y-1">
              <li>Add more files to the task folder (code files, config files, data files, etc.)</li>
              <li>Each task folder needs at least 2 files</li>
              <li>Commit and push the changes</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-red-600 mb-2">Error: "Not enough commits" or "Repository must have at least X commits"</h4>
            <p className="text-sm text-gray-700 mb-2"><strong>Solution:</strong></p>
            <ul className="list-disc list-inside text-sm text-gray-700 ml-2 space-y-1">
              <li>Make more commits to your repository</li>
              <li>Minimum requirements: 30 days = 10 commits, 45 days = 20 commits, 90 days = 40 commits</li>
              <li>Make commits over multiple days, not all at once</li>
              <li>Each commit should represent meaningful work</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-red-600 mb-2">Error: "All commits on same day"</h4>
            <p className="text-sm text-gray-700 mb-2"><strong>Solution:</strong></p>
            <ul className="list-disc list-inside text-sm text-gray-700 ml-2 space-y-1">
              <li>Spread your commits over multiple days</li>
              <li>Make a few commits each day rather than all at once</li>
              <li>This shows consistent work and learning progress</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-red-600 mb-2">Error: "Commits must be after batch start date"</h4>
            <p className="text-sm text-gray-700 mb-2"><strong>Solution:</strong></p>
            <ul className="list-disc list-inside text-sm text-gray-700 ml-2 space-y-1">
              <li>All commits must be made after your batch officially started</li>
              <li>Check your batch start date in the dashboard</li>
              <li>Make new commits if old ones are before the start date</li>
            </ul>
          </div>
        </div>
      </ExpandableSection>

      {/* Helpful Resources */}
      <ExpandableSection 
        title="8. Helpful Resources & Links" 
        icon={<ExternalLink className="w-5 h-5" />}
      >
        <div className="space-y-4">
          <div>
            <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Essential Documentation</h4>
            <div className="space-y-2">
              <a 
                href="https://docs.github.com/en/get-started" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-electric-blue hover:underline p-2 hover:bg-slate-grey rounded"
              >
                <ExternalLink className="w-4 h-4" />
                GitHub Getting Started Guide
              </a>
              <a 
                href="https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-electric-blue hover:underline p-2 hover:bg-slate-grey rounded"
              >
                <ExternalLink className="w-4 h-4" />
                Creating a Repository on GitHub
              </a>
              <a 
                href="https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-electric-blue hover:underline p-2 hover:bg-slate-grey rounded"
              >
                <ExternalLink className="w-4 h-4" />
                Cloning a Repository
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Git Learning Resources</h4>
            <div className="space-y-2">
              <a 
                href="https://git-scm.com/book/en/v2/Getting-Started-Git-Basics" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-electric-blue hover:underline p-2 hover:bg-slate-grey rounded"
              >
                <ExternalLink className="w-4 h-4" />
                Git Basics - Official Documentation
              </a>
              <a 
                href="https://education.github.com/git-cheat-sheet-education.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-electric-blue hover:underline p-2 hover:bg-slate-grey rounded"
              >
                <ExternalLink className="w-4 h-4" />
                Git Cheat Sheet (PDF)
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-h3 font-heading font-semibold text-navy mb-3">GitHub Desktop (GUI Tool)</h4>
            <div className="space-y-2">
              <a 
                href="https://desktop.github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-electric-blue hover:underline p-2 hover:bg-slate-grey rounded"
              >
                <ExternalLink className="w-4 h-4" />
                Download GitHub Desktop
              </a>
              <a 
                href="https://docs.github.com/en/desktop" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-electric-blue hover:underline p-2 hover:bg-slate-grey rounded"
              >
                <ExternalLink className="w-4 h-4" />
                GitHub Desktop Documentation
              </a>
              <p className="text-sm text-gray-600 ml-6">Perfect for beginners who prefer a visual interface over command line</p>
            </div>
          </div>

          <div>
            <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Markdown for README</h4>
            <div className="space-y-2">
              <a 
                href="https://www.markdownguide.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-electric-blue hover:underline p-2 hover:bg-slate-grey rounded"
              >
                <ExternalLink className="w-4 h-4" />
                Markdown Guide
              </a>
              <a 
                href="https://www.makeareadme.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-electric-blue hover:underline p-2 hover:bg-slate-grey rounded"
              >
                <ExternalLink className="w-4 h-4" />
                README Template Generator
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-h3 font-heading font-semibold text-navy mb-3">GitHub Student Benefits</h4>
            <div className="space-y-2">
              <a 
                href="https://education.github.com/pack" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-electric-blue hover:underline p-2 hover:bg-slate-grey rounded"
              >
                <ExternalLink className="w-4 h-4" />
                GitHub Student Developer Pack
              </a>
              <p className="text-sm text-gray-600 ml-6">Get free access to premium tools, cloud credits, and more while you're a student!</p>
            </div>
          </div>

          <div>
            <h4 className="text-h3 font-heading font-semibold text-navy mb-3">Video Tutorials</h4>
            <p className="text-sm text-gray-700 mb-2">Search YouTube for:</p>
            <ul className="list-disc list-inside text-sm text-gray-700 ml-2 space-y-1">
              <li>"GitHub Tutorial for Beginners"</li>
              <li>"Git Basics Tutorial"</li>
              <li>"How to Push Code to GitHub"</li>
            </ul>
          </div>
        </div>
      </ExpandableSection>

      {/* Quick Reference */}
      <Card className="bg-gradient-to-br from-electric-blue/5 to-transparent border-electric-blue/20">
        <h3 className="text-h2 font-heading font-bold text-navy mb-4">Quick Reference Checklist</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">Repository is Public</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">README.md in root directory</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">Folders named: Task-1, Task-2, etc.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">Each task folder has 2+ files</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">Minimum commits made (10/20/40)</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">Commits spread over multiple days</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">All commits after batch start date</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">Repository URL is correct format</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

