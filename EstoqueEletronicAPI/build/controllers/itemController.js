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
exports.deleteItemPorIdController = exports.atualizarItemController = exports.criandoItemController = exports.getItemPorCategoria = exports.getItemPorId = exports.getItems = void 0;
const itemModel_1 = require("../models/itemModel");
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const itens = yield (0, itemModel_1.pegarTodosItens)();
        res.json(itens);
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao pegar itens', error });
    }
});
exports.getItems = getItems;
const getItemPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const item = yield (0, itemModel_1.pegarItemPorId)(Number(id));
        if (item) {
            res.json(item);
        }
        else {
            res.status(404).json({ message: 'Item não encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao pegar item', error });
    }
});
exports.getItemPorId = getItemPorId;
const getItemPorCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const itens = yield (0, itemModel_1.pegarItensPorCategoria)(Number(id));
        if (itens.length > 0) {
            res.json(itens);
        }
        else {
            res.status(404).json({ message: 'Nenhum item encontrado para esta categoria' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao pegar itens por categoria', error });
    }
});
exports.getItemPorCategoria = getItemPorCategoria;
const criandoItemController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const novoItem = req.body;
    try {
        const itemCriado = yield (0, itemModel_1.criandoItem)(novoItem);
        res.status(201).json(itemCriado);
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao criar item', error });
    }
});
exports.criandoItemController = criandoItemController;
const atualizarItemController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const itemAtualizado = req.body;
    try {
        const item = yield (0, itemModel_1.atualizarItem)(Number(id), itemAtualizado);
        if (item) {
            res.json(item);
        }
        else {
            res.status(404).json({ message: 'Item não encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar item', error });
    }
});
exports.atualizarItemController = atualizarItemController;
const deleteItemPorIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield (0, itemModel_1.deleteItemPorId)(Number(id));
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao deletar item', error });
    }
});
exports.deleteItemPorIdController = deleteItemPorIdController;
