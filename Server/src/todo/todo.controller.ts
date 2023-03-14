import { Body, Controller, Post, Res } from '@nestjs/common';
import { CreateTodoDto } from './dto/todo.dto';

@Controller('todo')
export class TodoController {
    @Post()
    create(@Res() res, @Body() createTodoDto: CreateTodoDto) {
        return res.status(200).json({
            message: 'Todo created successfully',
        });
    }
}