import { Request, Response } from 'express';
import {
  pegarTodasCat,
  pegarCatPorId,
  criandoCat,
  atualizarCat,
  deleteCatPorId,
} from '../models/categoryModel';

// Controlador para pegar todas as categorias
export const getCategorias = async (req: Request, res: Response) => {
  try {
    const categorias = await pegarTodasCat();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao pegar categorias', error });
  }
};

// Controlador para pegar uma categoria por ID
export const getCatPorId = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const categoria = await pegarCatPorId(Number(id));
    if (categoria) {
      res.json(categoria);
    } else {
      res.status(404).json({ message: 'Categoria não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao pegar categoria', error });
  }
};

// Controlador para criar uma nova categoria
export const criandoCatController = async (req: Request, res: Response) => {
  const novaCategoria = req.body;
  try {
    const categoriaCriada = await criandoCat(novaCategoria);
    res.status(201).json(categoriaCriada);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar categoria', error });
  }
};

// Controlador para atualizar uma categoria
export const atualizarCatController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const categoriaAtualizada = req.body;
  try {
    const categoria = await atualizarCat(Number(id), categoriaAtualizada);
    if (categoria) {
      res.json(categoria);
    } else {
      res.status(404).json({ message: 'Categoria não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar categoria', error });
  }
};

// Controlador para deletar uma categoria por ID
export const deleteCatPorIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteCatPorId(Number(id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar categoria', error });
  }
};
