import { Logger, UseGuards } from '@nestjs/common';

import {
    SubscribeMessage,
    WebSocketGateway,
    OnGatewayInit,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

import { AuthTopicGuard } from './guards/auth-topic.guard';

@WebSocketGateway()
export class AppGateway
    implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server;

    private logger: Logger = new Logger('AppGateway');

    @UseGuards(AuthTopicGuard)
    @SubscribeMessage('setTopic')
    handleMessage(client: Socket, payload: any): void {
        const { topic } = payload;
        if (topic) {
            client.on(topic, (payload) => {
                console.warn('payload', payload);
            })
        }
        this.server.emit('setTopic', payload);
    }

    afterInit(server: Server) {
        this.logger.log('Init');
    }

    handleDisconnect(client: Socket) {
        this.logger.log(`Client disconnected: ${client.id}`);
    }

    handleConnection(client: Socket, ...args: any[]) {
        this.logger.log(`Client connected: ${client.id}`);
    }
}