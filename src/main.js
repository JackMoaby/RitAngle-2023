const ArrayUtils = require("../utils/arrayUtils")
const { GPU } = require('gpu.js');

const cpu = new GPU({ mode: 'cpu' });
var gpu = new GPU();

let matrixSize = 2048

const generateMatrices = (size) => {
	const matrices = [[],[]]
	for (let y = 0; y < size; y++) {
		matrices[0].push([])
		matrices[1].push([])
		for (let x = 0; x < size; x++) {
			matrices[0][y].push(Math.random())
			matrices[1][y].push(Math.random())
		}
	}
	return matrices
}

const multiplyMatrixCPU = cpu.createKernel(function(a, b, c) {
	let sum = 0;
	for (let i = 0; i < c; i++) {
		sum += a[this.thread.y][i] * b[i][this.thread.x];
	}
	return sum;
}).setOutput([matrixSize, matrixSize])

const multiplyMatrixGPU = gpu.createKernel(function(a, b, c) {
	let sum = 0;
	for (let i = 0; i < c; i++) {
		sum += a[this.thread.y][i] * b[i][this.thread.x];
	}
	return sum;
}).setOutput([matrixSize, matrixSize])



let matrices = generateMatrices(matrixSize)
console.time(`CPU - ${matrixSize}`)
const outCPU = multiplyMatrixCPU(matrices[0], matrices[1], matrixSize)
console.timeEnd(`CPU - ${matrixSize}`)
console.time(`GPU - ${matrixSize}`)
const outGPU = multiplyMatrixGPU(matrices[0], matrices[1], matrixSize)
console.timeEnd(`GPU - ${matrixSize}`)
