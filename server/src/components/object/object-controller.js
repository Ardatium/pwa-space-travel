import Object from "./object-model.js";
import Joi from "joi";

export async function getAll (ctx) {
    try {
        const objects = await Object.find({})
        ctx.ok(objects)
    } catch (e) {
        ctx.badRequest({message: e.message})
    }
}

export async function getId (ctx) {
    try {
        const objects = await Object.findById(ctx.params.id)
        ctx.ok(objects)
    } catch (e) {
        ctx.badRequest({message: e.message})
    }
}

export async function create (ctx) {
    try {
        const ObjectValidationSchema = Joi.object({
            astro_id: Joi.string().required(),
            visited: Joi.boolean(),
            visit_date: Joi.date(),
            priority: Joi.number()
        });

        const {error, value} = ObjectValidationSchema.validate(ctx.request.body)
        if(error) throw new Error(error)
        const object = await Object.create(value)
        ctx.ok(object)
    } catch (e) {
        ctx.badRequest({message: e.message})
    }
}

export async function update (ctx) {
    try {
        const ObjectValidationSchema = Joi.object({
            astro_id: Joi.string(),
            visited: Joi.boolean(),
            visit_date: Joi.date(),
            priority: Joi.number()
        });

        const {error, value} = ObjectValidationSchema.validate(ctx.request.body)
        if(error) throw new Error(error)
        const object = await Object.findByIdAndUpdate(
            ctx.params.id, value, {runValidators: true, new: true}
        );
        ctx.ok(object)
    } catch (e) {
        ctx.badRequest({message: e.message})
    }
}

export async function del (ctx) {
    try {
        const object = await Object.findByIdAndDelete(ctx.request.id)
        ctx.ok(object)
    } catch (e) {
        ctx.badRequest({message: e.message})
    }
}

export async function getPriority (ctx) {
    try {
        let query = {priority: ctx.param.priority, visited: false}
        const object = await Task.find(query)
        ctx.ok(object)
    } catch (e) {
        ctx.badRequest({message: e.message})
    }
}

export async function getVisited (ctx) {
    try {
        let query = {visited: ctx.params.visited}
        const object = await Task.find(query)
        ctx.ok(object)
    } catch (e) {
        ctx.badRequest({message: e.message})
    }
}
