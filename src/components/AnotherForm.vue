<template>
    <Row type="flex" justify="center" :gutter="20">
        <Col :span="12" type="flex" justify="left">
        <Card>
            <h3>Login to Our Site</h3>
            <Form label-position="top" :model="formLabel">
                <Form-Item label="Email">
                    <Input v-model="form.email"></Input>
                </Form-Item>
                <Form-Item label="Password">
                    <Input type="password" v-model="form.password"></Input>
                </Form-Item>
            </Form>
            <Row>
                <Button class="login-btn" type="primary" @click="onSubmit">Login</Button>
            </Row>
        </Card>
        </Col>
        <Col :span="12">
        <Card>
            <h3>Register</h3>
            <Form label-position="left" label-width="80" :model="formLabel">
                <Form-Item label="Email">
                    <Input v-model="form.email"></Input>
                </Form-Item>
                <Form-Item label="Password">
                    <Input type="password" v-model="form.password"></Input>
                </Form-Item>
                <Form-Item>
                    <Button class="login-btn" type="error" @click="onSubmit" long>Register</Button>
                </Form-Item>

                <Row>
                    <Button class="login-btn" type="warning" @click="onSubmit" long>Register</Button>
                </Row>
            </Form>
            <p><a href="https://www.youtube.com/watch?v=pW-Vk9-w1bo">https://www.youtube.com/watch?v=pW-Vk9-w1bo</a></p>
        </Card>
        </Col>
    </Row>
</template>

<script>
export default {
    data () {
        return {
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

<style scoped>
.ivu-col:nth-child(1) {
    text-align: left;
}
</style>