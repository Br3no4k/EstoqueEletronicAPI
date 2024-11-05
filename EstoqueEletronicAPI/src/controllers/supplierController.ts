import { Request, Response } from 'express';
import {
  pegarTodosForn,
  pegarFornPorId,
  criandoForn,
  atualizarForn,
  deleteFornPorId,
} from '../models/supplierModel';

// Controlador para pegar todos os fornecedores
export const getFornecedores = async (req: Request, res: Response) => {
  try {
    const fornecedores = await pegarTodosForn();
    res.json(fornecedores);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao pegar fornecedores', error });
  }
};

// Controlador para pegar um fornecedor por ID
export const getFornPorId = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const fornecedor = await pegarFornPorId(Number(id));
    if (fornecedor) {
      res.json(fornecedor);
    } else {
      res.status(404).json({ message: 'Fornecedor não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao pegar fornecedor', error });
  }
};

// Controlador para criar um novo fornecedor
export const criandoFornController = async (req: Request, res: Response) => {
  const novoFornecedor = req.body;
  try {
    const fornecedorCriado = await criandoForn(novoFornecedor);
    res.status(201).json(fornecedorCriado);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar fornecedor', error });
  }
};

// Controlador para atualizar um fornecedor
export const atualizarFornController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const fornecedorAtualizado = req.body;
  try {
    const fornecedor = await atualizarForn(Number(id), fornecedorAtualizado);
    if (fornecedor) {
      res.json(fornecedor);
    } else {
      res.status(404).json({ message: 'Fornecedor não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar fornecedor', error });
  }
};

// Controlador para deletar um fornecedor por ID
export const deleteFornPorIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteFornPorId(Number(id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar fornecedor', error });
  }
};
