## **Arg Parser is a light-weight package for process arg list in nodejs**

----
### What does arg parser do?

You can use it to process the argv passed to your program when start

Assuming your input is
```
$ NODE_ENV=staging node --max-old-space-size=4096 ./src/index.js --timeout=3 --debug -v
```
And your expection is:
```
Set timeout 3 during runtime (arg_a)
Active a debug flag (argb) and verbose flag (argc)
```
Also, you expect that

 1. some arguments could be shorten, like --timeout and -T have same effect
 2. some arguments could have and init value passed by both using = or \s, for instance, --timeout=5 or -T 5 both represent a timtout setting of 5 sec
 3. arguments could be combined when use shorthand format, like -v -x -c could be writtne in -vxc

----
### So how to use it?
After require the packege
```
const argParser = require('arg-parser');
```

1. You should specify the relationship between your property name and arg name.
```
argParser.setFormatter('timeout', 
{
  short: '-T',
  full: '--timeout',
  hasValue: true,
  defaultValue: 1,
  delim: ['=', /s+/g],
  combinable: true,
});
```
2. You can try to extract the value from your argument list by using extract, if there's any error happend, null will be returned
```
const timeout = argParser.extract('timeout');
```
If you wanna receive any error but not a null
```
const timeout = argParser.extract('timeout', {
  silentFail: false,
});
```
3. In order to process all the arguments, you can use exec to process the entire argument list
```
argParser.setFormatter( ... );
argParser.setFormatter( ... );
argParser.exec(); // all the arguments will be processed here
const arg = argParser.extract( ... ) 
```
4. You may ask for a full processed arg list, that you will receive an array which could be empty if there's no formatter passed. **Also**, exec() will be called implicitly while calling extractList()
```
const processedArgv = argParser.extractList();
```