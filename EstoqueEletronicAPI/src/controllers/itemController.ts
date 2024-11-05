import { Request, Response } from 'express';
import {
  pegarTodosItens,
  pegarItemPorId,
  pegarItensPorCategoria,
  criandoItem,
  atualizarItem,
  deleteItemPorId,
} from '../models/itemModel';

// Controlador para pegar todos os itens
export const getItems = async (req: Request, res: Response) => {
  try {
    const itens = await pegarTodosItens();
    res.json(itens);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao pegar itens', error });
  }
};

// Controlador para pegar um item por ID
export const getItemPorId = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const item = await pegarItemPorId(Number(id));
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: 'Item não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao pegar item', error });
  }
};

// Controlador para pegar itens por categoria
export const getItemPorCategoria = async (req: Request, res: Response) => {
    const { id } = req.params; // id da categoria
    try {
      const itens = await pegarItensPorCategoria(Number(id)); // Usa o modelo para pegar itens por categoria
      if (itens.length > 0) {
        res.json(itens);
      } else {
        res.status(404).json({ message: 'Nenhum item encontrado para esta categoria' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao pegar itens por categoria', error });
    }
};

// Controlador para criar um novo item
export const criandoItemController = async (req: Request, res: Response) => {
  const novoItem = req.body;
  try {
    const itemCriado = await criandoItem(novoItem);
    res.status(201).json(itemCriado);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar item', error });
  }
};

// Controlador para atualizar um item
export const atualizarItemController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const itemAtualizado = req.body;
  try {
    const item = await atualizarItem(Number(id), itemAtualizado);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: 'Item não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar item', error });
  }
};

// Controlador para deletar um item por ID
export const deleteItemPorIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteItemPorId(Number(id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar item', error });
  }
};
