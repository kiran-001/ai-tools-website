const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to read the content of a file
const readFileContent = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// Function to add a file name as a comment
const addFileNameAsComment = (filePath) => {
  const extension = path.extname(filePath);
  const fileNameComment = `File: ${filePath}\n`;
  switch (extension) {
    case '.js':
    case '.jsx':
      return `// ${fileNameComment}`;
    case '.json':
      return `/* ${fileNameComment} */\n`;
    case '.html':
      return `<!-- ${fileNameComment} -->\n`;
    case '.css':
      return `/* ${fileNameComment} */\n`;
    case '.md':
      return `<!-- ${fileNameComment} -->\n`;
    default:
      return `# ${fileNameComment}`;
  }
};

// Function to create a detailed summary of the project focusing on the src folder
const createSummary = async (projectPath) => {
  try {
    const summaryFilePath = path.join(projectPath, 'projectSummary.txt');
    const writeStream = fs.createWriteStream(summaryFilePath);
    writeStream.write(`Summary of project at ${projectPath}\n\n`);

    // Match all relevant files in the src folder
    const srcPath = path.join(projectPath, 'src');
    const files = glob.sync(`${srcPath}/**/*.{js,jsx,json,html,css,md}`, { nodir: true });

    for (const file of files) {
      const fileComment = addFileNameAsComment(file);
      writeStream.write(fileComment);
      const content = await readFileContent(file);
      writeStream.write(`${content}\n\n`);
    }

    writeStream.end();
    console.log('Project summary created successfully.');
  } catch (error) {
    console.error('Error creating project summary:', error);
  }
};

// Get the current project directory
const projectPath = process.cwd();
createSummary(projectPath);
