import { Request, Response } from 'express';
// @ts-ignore
import { last, filter, includes } from 'ramda';
// @ts-ignore
import { v4 } from 'uuid';

let dataSource = [
  {
    id: '0825e86c-4fdb-48d7-b8e7-560736736d89',
    text: '考勤打卡',
  },
  {
    id: '06dc79b7-2c34-42c6-87b6-a928e9188c8d',
    text: '禅道',
  },
  {
    id: '79012ce4-a849-475d-aa7e-901cc0228886',
    text: '周报',
  },
  {
    id: '268c4492-1205-4cf7-b095-fa18c797d77c',
    text: '年终总结',
  },
];

export default {
  'GET /api/todos': (req: Request, res: Response) => {
    res.send({
      success: true,
      data: dataSource,
      total: dataSource.length,
    });
  },
  'POST /api/todo': (req: Request, res: Response) => {
    const props = req.body;
    const id = v4();
    const item = {
      ...props,
      id,
    };
    dataSource.push(item);
    res.send({
      success: true,
    });
  },
  'PUT /api/todo/:id': (req: Request, res: Response) => {
    const { id } = req.params;
    const props = { ...req.body, id };
    dataSource = dataSource.map((item) => (item.id === id ? props : item));
    res.send({
      success: true,
    });
  },
  'DELETE /api/todo/:id': (req: Request, res: Response) => {
    const { id } = req.params;
    dataSource = dataSource.filter((item) => item.id !== id);
    res.send({
      success: true,
    });
  },
};
