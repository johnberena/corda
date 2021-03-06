package net.corda.core.serialization.amqp

import org.apache.qpid.proton.amqp.Binary
import org.apache.qpid.proton.codec.Data
import java.lang.reflect.Type

/**
 * Serializer / deserializer for native AMQP types (Int, Float, String etc).
 *
 * [ByteArray] is automatically marshalled to/from the Proton-J wrapper, [Binary].
 */
class AMQPPrimitiveSerializer(clazz: Class<*>) : AMQPSerializer<Any> {
    override val typeDescriptor: String = SerializerFactory.primitiveTypeName(clazz)!!
    override val type: Type = clazz

    // NOOP since this is a primitive type.
    override fun writeClassInfo(output: SerializationOutput) {
    }

    override fun writeObject(obj: Any, data: Data, type: Type, output: SerializationOutput) {
        if (obj is ByteArray) {
            data.putObject(Binary(obj))
        } else {
            data.putObject(obj)
        }
    }

    override fun readObject(obj: Any, schema: Schema, input: DeserializationInput): Any = (obj as? Binary)?.array ?: obj
}