<template>
    <section>
        <Row type="flex" justify="center" :gutter="20">
            <Col :span="12" type="flex" justify="left">
            <Card>
                <h3>Login to Our Site</h3>
                <Form label-position="top" v-model="formLabel">
                    <Form-Item label="Email">
                        <Input v-model="form.email"></Input>
                    </Form-Item>
                    <Form-Item label="Password">
                        <Input type="password" v-model="form.password"></Input>
                    </Form-Item>
                </Form>
                <Row>
                    <Button class="login-btn" type="success" @click="onSubmit" long>Login</Button>
                </Row>
            </Card>
            </Col>
            <Col :span="12">
            <Card>
                <h3>Register</h3>
                <Form label-position="left" label-width="80" v-model="formLabel">
                    <Form-Item label="Email">
                        <Input v-model="form.email"></Input>
                    </Form-Item>
                    <Form-Item label="Password">
                        <Input type="password" v-model="form.password"></Input>
                    </Form-Item>
                    <Form-Item>
                        <Button class="login-btn" type="error" @click="onSubmit" long>Register</Button>
                    </Form-Item>
                    <Form-item label="Select Car">
                        <Select class="dob" v-model="value" placeholder="Select" size="large">
                            <Option v-for="i in options" :key="i.value" :label="i.label" :value="i.value">
                            </Option>
                        </Select>
                    </Form-item>
                    <Row>
                        <Button class="login-btn" type="warning" @click="onSubmit" long>Register</Button>
                    </Row>
                </Form>
                <p><a href="https://www.youtube.com/watch?v=pW-Vk9-w1bo">https://www.youtube.com/watch?v=pW-Vk9-w1bo</a></p>
            </Card>
            </Col>
        </Row>
        <Row>
            <div class="caro">
                <Carousel :interval="250" type="card" height="100px">
                    <Carousel-Item v-for="(i, index) in options" :key="`carousel-item-${index}`">
                        {{ i.label }}
                    </Carousel-Item>
                </Carousel>
            </div>
        </Row>
    </section>
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
            },
            options: [
                {
                    label: 'F40',
                    value: 'F40'
                }, {
                    label: 'GTO',
                    value: 'GTO'
                }, {
                    label: 'Testarossa',
                    value: 'Testarossa'
                }
            ],
            value: undefined
        }
    },
    methods: {
        onSubmit () {
            console.log("⚛ ~ value", this.value);
        }
    }
}
</script>

<style scoped>
.ivu-col:nth-child(1) {
    text-align: left;
}
</style>