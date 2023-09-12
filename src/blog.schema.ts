import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogDocument = Blog & Document;
// 교차타입( C = A & B ) -> C는 A와 B의 프로퍼티를 다 가지고 있어야 함

// @nestjs/mongoose에서 제공하는 데코레이터
@Schema()
export class Blog{
    // @Prop()은 모델의 프로퍼티임을 나타냄
    // @Prop({require:true}) -> 등으로 옵션을 추가할 수 있음
    @Prop()
    id: string;

    @Prop()
    title: string;

    @Prop()
    content: string;

    @Prop()
    name: string;

    @Prop()
    createdDt: Date;

    @Prop()
    updatedDt: Date;
}

//SchemaFactory.createForClass() 함수를 이용하여 스키마를 생성
// 내부적으로 mongoose의 new Schema를 사용
export const BlogSchema = SchemaFactory.createForClass(Blog);