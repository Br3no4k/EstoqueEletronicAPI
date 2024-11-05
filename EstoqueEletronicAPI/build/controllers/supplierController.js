"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFornPorIdController = exports.atualizarFornController = exports.criandoFornController = exports.getFornPorId = exports.getFornecedores = void 0;
const supplierModel_1 = require("../models/supplierModel");
const getFornecedores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fornecedores = yield (0, supplierModel_1.pegarTodosForn)();
        res.json(fornecedores);
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao pegar fornecedores', error });
    }
});
exports.getFornecedores = getFornecedores;
const getFornPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const fornecedor = yield (0, supplierModel_1.pegarFornPorId)(Number(id));
        if (fornecedor) {
            res.json(fornecedor);
        }
        else {
            res.status(404).json({ message: 'Fornecedor não encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao pegar fornecedor', error });
    }
});
exports.getFornPorId = getFornPorId;
const criandoFornController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const novoFornecedor = req.body;
    try {
        const fornecedorCriado = yield (0, supplierModel_1.criandoForn)(novoFornecedor);
        res.status(201).json(fornecedorCriado);
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao criar fornecedor', error });
    }
});
exports.criandoFornController = criandoFornController;
const atualizarFornController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const fornecedorAtualizado = req.body;
    try {
        const fornecedor = yield (0, supplierModel_1.atualizarForn)(Number(id), fornecedorAtualizado);
        if (fornecedor) {
            res.json(fornecedor);
        }
        else {
            res.status(404).json({ message: 'Fornecedor não encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar fornecedor', error });
    }
});
exports.atualizarFornController = atualizarFornController;
const deleteFornPorIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield (0, supplierModel_1.deleteFornPorId)(Number(id));
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao deletar fornecedor', error });
    }
});
exports.deleteFornPorIdController = deleteFornPorIdController;
