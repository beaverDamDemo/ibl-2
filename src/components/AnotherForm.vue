<template>
    <Row type="flex" justify="center" :gutter="20">
        <Col :span="8">
        <Card>
            <h3>Login to Our Site</h3>
            <Form :label-position="labelPosition" label-width="80" :model="formLabel">
                <Form-Item label="Email">
                    <Input v-model="form.email"></Input>
                </Form-Item>
                <Form-Item label="Password">
                    <Input type="password" v-model="form.password"></Input>
                </Form-Item>
                <Form-Item label="Email">
                    <Button class="login-btn" type="primary" @click="onSubmit">Login</Button>
                </Form-Item>
            </Form>
        </Card>
        </Col>
        <Col :span="8">
        <Card>
            <h3>Register</h3>
            <Form :label-position="labelPosition" label-width="80" :model="formLabel">
                <Form-Item label="Email">
                    <Input v-model="form.email"></Input>
                </Form-Item>
                <Form-Item label="Password">
                    <Input type="password" v-model="form.password"></Input>
                </Form-Item>
                <Form-Item label="Email">
                    <Button class="login-btn" type="error" @click="onSubmit">Register</Button>
                </Form-Item>
            </Form>
        </Card>
        </Col>
    </Row>
</template>

<script>
export default {
    data () {
        return {
            labelPosition: 'top',
            formLabel: {
                email: 'Email',
                password: 'Password'
            },
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        onSubmit () {

        }
    }
}
</script>

<style scoped></style>