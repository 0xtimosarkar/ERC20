# doppler
A safe quantum programming-language with integrated multi-qubit simulation

## possible compilation pipeline over MLIR SSA

1. Parsing doppler into AST
2. Generating IR
3. Optimize IR generated MLIR over LLVM
4. JIT execute optimized IR

## possible compilation pipeline over openQASM

1. Parsing doppler binary into MIPS like arch
2. Transpile code into openQASM
3. Feed instructions into dopplerSim
