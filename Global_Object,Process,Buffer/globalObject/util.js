var answer = 42; // it is local to the util file and only the file itself has the right to access.

global.answer = 42; // it can be access globaly to any file which require import.