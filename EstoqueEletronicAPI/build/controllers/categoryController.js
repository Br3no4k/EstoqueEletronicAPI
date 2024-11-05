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
exports.deleteCatPorIdController = exports.atualizarCatController = exports.criandoCatController = exports.getCatPorId = exports.getCategorias = void 0;
const categoryModel_1 = require("../models/categoryModel");
const getCategorias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categorias = yield (0, categoryModel_1.pegarTodasCat)();
        res.json(categorias);
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao pegar categorias', error });
    }
});
exports.getCategorias = getCategorias;
const getCatPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const categoria = yield (0, categoryModel_1.pegarCatPorId)(Number(id));
        if (categoria) {
            res.json(categoria);
        }
        else {
            res.status(404).json({ message: 'Categoria não encontrada' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao pegar categoria', error });
    }
});
exports.getCatPorId = getCatPorId;
const criandoCatController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const novaCategoria = req.body;
    try {
        const categoriaCriada = yield (0, categoryModel_1.criandoCat)(novaCategoria);
        res.status(201).json(categoriaCriada);
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao criar categoria', error });
    }
});
exports.criandoCatController = criandoCatController;
const atualizarCatController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const categoriaAtualizada = req.body;
    try {
        const categoria = yield (0, categoryModel_1.atualizarCat)(Number(id), categoriaAtualizada);
        if (categoria) {
            res.json(categoria);
        }
        else {
            res.status(404).json({ message: 'Categoria não encontrada' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar categoria', error });
    }
});
exports.atualizarCatController = atualizarCatController;
const deleteCatPorIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield (0, categoryModel_1.deleteCatPorId)(Number(id));
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao deletar categoria', error });
    }
});
exports.deleteCatPorIdController = deleteCatPorIdController;
