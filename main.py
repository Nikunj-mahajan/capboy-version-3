info.set_life(5)
mySprite = sprites.create(assets.image("""
    you
"""), SpriteKind.player)
mySprite2 = sprites.create(assets.image("""
    skeleton
"""), SpriteKind.enemy)
scene.set_background_image(img("""
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666886666666666666666666666666666666666666666666666666666666866666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666686666666666666668866666666666666666666666666666666666666666666666666666668866666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666668886666666666686666666666666666666866666666666666666666666666666666666886666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666668888888888886666666666666666666686666666666666666666666666666666888666666666666666666666666666866666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666668866666666666666666666666666688666666666666666666666666666666688666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666688866666666666666666666688866666666666666666666666666666666666886666666666666666666666666666666666666668666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666688888888888888888888866666666666666666666666666666666666666668866666666666666666666666666666668888886666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666688886666666666666666666666688886666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666668888888666666666666668866666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666888888888888886666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666866666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666866666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666668666666666666666666666666666666666666666666666666666666666666666686666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666886666666666666666666666666666666666666666666666666666666666666668666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666668866666666666666666666666666666666666666666666666666666666666668666666666666666666666666666666666666666666666886666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666688666666666666666666666666688666666666666666666666666666666666866666666666666666666666666666666666666666688866666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666866666666666666666666666688866666666666666666666666666666666866666666666666666666666666666666666666668866666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666688888888666666666666688866666666666666666666666666666666666688666666666666666666666666666666666666888666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666888888888888866666666666666666666666666666666666666666886666666666666666666666666666688888666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666668888888866666666666666666688866666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666688888888888888888866666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        66666666666666668888886666666666666666666666866666666666666666666666666666666666666666666666666666686666666666666666666666666666666666666666666666666668888666669999999999999999999999999999999999999999
        66666666666666666666668886666666666666666666866666666666666666666666866666666666666666666666666666888666666666666666666666666688888666666666666666666688666666669999999999999999999999999999999999999999
        66666666666666666666666668888666666666666888866666666666666666666666688888666666666666666666666888666666666666666666666666666666666888666666666666668866666666669999999999999999999999999999999999999999
        66666666666666666666666666666888888888888666666666666666666666666666666666888666666666666688888666666666666666666666666666666666666666888886666666688666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666888888888888866666666666666666666666666666666666666666666666668888888886666666666669999999999999999999999999999999999999999
        66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
"""))
tiles.set_tilemap(tilemap("""
    level1
"""))
mySprite3 = sprites.create(img("""
        ...fffffffffffffffffffffffffffffffff....
            ..feeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddf...
            .feeeeeeeeeeeeeeeeeeeeeeeeeeeefbdbbbdf..
            .feeeeeeeeeeeeeeeeeeeeeeeeeeeefdbbdbbdf.
            feeeeeeeeeeeeeeeeeeeeeeeeeeeefbdbdbdbdf.
            feeeeeeeeeeeeeeeeeeeeeeeeeeeefdbdbdbdbdf
            feeeeeeeeeeeeeeeeeeeeeeeeeeeefdbdbdbdbdf
            feeeeeeeeeeeeeeeeeeeeeeeeeeeefdbdbdbdbdf
            feeeeeeeeeeeeeeeeeeeeeeeeeeeefdbdbdbdbdf
            feeeeeeeeeeeeeeeeeeeeeeeeeeeefbdbdbdbdf.
            .feeeeeeeeeeeeeeeeeeeeeeeeeeeefdbbdbbdf.
            .feeeeeeeeeeeeeeeeeeeeeeeeeeeefbdbbbdf..
            ..feeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddf...
            ...fffffffffffffffffffffffffffffffff....
    """),
    SpriteKind.player)
mySprite3.set_position(116, 19)
mySprite.set_position(134, 89)
mySprite2.set_position(49, 45)
animation.run_image_animation(mySprite,
    [img("""
            . . . . e e e e e e . . . . 
                . . . e e e e e e e e . . . 
                . . . e d f d d f d e . . . 
                . . . e d f d d f d e . . . 
                . . . d d d d d d d d . . . 
                . . . 6 d d 2 2 d d 6 . . . 
                . . . 6 6 d d d d 6 6 . . . 
                . . . 6 6 6 6 6 6 6 6 . . . 
                . . d 6 6 6 6 6 6 6 6 d . . 
                d d d d 6 e e e 6 6 d d d d 
                d d d e e e 6 e e e e d d d 
                d d . 6 6 e e e 6 6 6 . d d 
                . . . 6 6 6 6 6 6 6 6 . . . 
                . . . e e e . . e e e . . . 
                . . . e e e . . e e e . . .
        """),
        img("""
            . . . . e e e e e e . . . . 
                . . . e e e e e e e e . . . 
                . . . e d f d d f d e . . . 
                . . . e d f d d f d e . . . 
                . . . d d d d d d d d . . . 
                . . . 6 d d 2 2 d d 6 . . . 
                . . . 6 6 d d d d 6 6 . . . 
                . . d 6 6 6 6 6 6 6 6 d . . 
                d d d d 6 6 6 6 6 6 d d d d 
                d d d 6 6 e e e 6 6 6 d d d 
                d d . e e e 6 e e e e . d d 
                . . . 6 6 e e e 6 6 6 . . . 
                . . . 6 6 6 6 6 6 6 6 . . . 
                . . . e e e . . e e e . . . 
                . . . e e e . . e e e . . .
        """),
        img("""
            . . . . e e e e e e . . . . 
                . . . e e e e e e e e . . . 
                . . . e d d d d d d e . . . 
                . . . e d f d d f d e . . . 
                . . . d d d d d d d d . . . 
                . . . 6 d d 2 2 d d 6 . . . 
                . . . 6 6 d d d d 6 6 . . . 
                . . . 6 6 6 6 6 6 6 6 . . . 
                . . d 6 6 6 6 6 6 6 6 d . . 
                d d d d 6 e e e 6 6 d d d d 
                d d d e e e 6 e e e e d d d 
                d d . 6 6 e e e 6 6 6 . d d 
                . . . 6 6 6 6 6 6 6 6 . . . 
                . . . e e e . . e e e . . . 
                . . . e e e . . e e e . . .
        """),
        img("""
            . . . . e e e e e e . . . . 
                . . . e e e e e e e e . . . 
                . . . e d f d d f d e . . . 
                . . . e d f d d f d e . . . 
                . . . d d d d d d d d . . . 
                . . . 6 d d 2 2 d d 6 . . . 
                . . . 6 6 d d d d 6 6 . . . 
                . . d 6 6 6 6 6 6 6 6 d . . 
                d d d d 6 6 6 6 6 6 d d d d 
                d d d 6 6 e e e 6 6 6 d d d 
                d d . e e e 6 e e e e . d d 
                . . . 6 6 e e e 6 6 6 . . . 
                . . . 6 6 6 6 6 6 6 6 . . . 
                . . . e e e . . e e e . . . 
                . . . e e e . . e e e . . .
        """),
        img("""
            . . . . e e e e e e . . . . 
                . . . e e e e e e e e . . . 
                . . . e d f d d f d e . . . 
                . . . e d f d d f d e . . . 
                . . . d d d d d d d d . . . 
                . . . 6 d d 2 2 d d 6 . . . 
                . . . 6 6 d d d d 6 6 . . . 
                . . . 6 6 6 6 6 6 6 6 . . . 
                . . d 6 6 6 6 6 6 6 6 d . . 
                d d d d 6 e e e 6 6 d d d d 
                d d d e e e 6 e e e e d d d 
                d d . 6 6 e e e 6 6 6 . d d 
                . . . 6 6 6 6 6 6 6 6 . . . 
                . . . e e e . . e e e . . . 
                . . . e e e . . e e e . . .
        """),
        img("""
            . . . . e e e e e e . . . . 
                . . . e e e e e e e e . . . 
                . . . e d d d d d d e . . . 
                . . . e d f d d f d e . . . 
                . . . d d d d d d d d . . . 
                . . . 6 d d 2 2 d d 6 . . . 
                . . . 6 6 d d d d 6 6 . . . 
                . . d 6 6 6 6 6 6 6 6 d . . 
                d d d d 6 6 6 6 6 6 d d d d 
                d d d 6 6 e e e 6 6 6 d d d 
                d d . e e e 6 e e e e . d d 
                . . . 6 6 e e e 6 6 6 . . . 
                . . . 6 6 6 6 6 6 6 6 . . . 
                . . . e e e . . e e e . . . 
                . . . e e e . . e e e . . .
        """)],
    500,
    True)
effects.clouds.start_screen_effect()
animation.run_movement_animation(mySprite2,
    animation.animation_presets(animation.shake),
    2000,
    True)

def on_forever():
    controller.move_sprite(mySprite)
    music.play_melody("C5 C5 C5 C5 C5 C5 C5 C5 ", 120)
    music.play_melody("B B B B B B B B ", 120)
forever(on_forever)