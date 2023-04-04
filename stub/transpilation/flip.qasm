OPENQASM 2.0;
include "qelib1.inc";

qreg q[2];

gate flipflop a, b {
    cx b, a;
}

x q[1];
flipflop q[0], q[1];
x q[1];
