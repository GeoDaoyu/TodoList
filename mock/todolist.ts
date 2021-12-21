import { Request, Response } from 'express';
// @ts-ignore
import { last, filter, includes } from 'ramda';

let increment = 3;

let dataSource = [
  {
    id: 0,
    text: '考勤打卡',
  },
  {
    id: 1,
    text: '禅道',
  },
  {
    id: 2,
    text: '周报',
  },
  {
    id: 3,
    text: '年终总结',
  },
];

export default {
  'GET /api/todoList': (req: Request, res: Response) => {
    res.send({
      success: true,
      data: dataSource,
    });
  },
  'POST /api/todoList': (req: Request, res: Response) => {
    const props = req.body;
    const id = ++increment;
    const item = {
      ...props,
      id,
    };
    dataSource.push(item);
    res.send({
      success: true,
    });
  },
  'PUT /api/todoList': (req: Request, res: Response) => {
    const props = req.body;
    const { id } = props;
    dataSource = dataSource.map((item) => (item.id === id ? props : item));
    res.send({
      success: true,
    });
  },
  'DELETE /api/todoList': (req: Request, res: Response) => {
    const { id } = req.body;
    dataSource = dataSource.filter((item) => item.id !== id);
    res.send({
      success: true,
    });
  },
};
