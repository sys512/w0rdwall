console.log("modded script loaded!!!")
(function() {
    var k = {};
    global.VEL = global.VEL || {};
    global.VEL.Wordwall = global.VEL.Wordwall || {};
    global.VEL.Wordwall.Application = global.VEL.Wordwall.Application || {};
    global.VEL.Wordwall.Application.Client = global.VEL.Wordwall.Application.Client || {};
    global.VEL.Wordwall.Application.Client.Documents = global.VEL.Wordwall.Application.Client.Documents || {};
    global.VEL.Wordwall.Application.Client.GoogleClassroom = global.VEL.Wordwall.Application.Client.GoogleClassroom || {};
    ss.initAssembly(k, "VEL.Wordwall.Application.Client");
    var l = function() {
        this.$5 = 0;
        this.$6 = false;
        document.addEventListener("mozfullscreenchange", ss.mkdel(this, this.$0));
        document.addEventListener("webkitfullscreenchange", ss.mkdel(this, this.$0));
        document.addEventListener("fullscreenchange", ss.mkdel(this, this.$0));
        document.addEventListener("MSFullscreenChange", ss.mkdel(this, this.$0))
    };
    l.__typeName = "VEL.Wordwall.Application.Client.$0";
    var m = function() {
        this.$1$1 = null;
        this.$1$2 = null;
        this.$1$3 = 0;
        this.$1$4 = 0
    };
    m.__typeName = "VEL.Wordwall.Application.Client.$1";
    var n = function() {
        this.$z = null;
        this.$q = null;
        this.$s = null;
        this.$v = null;
        this.$A = null;
        this.$r = 0;
        this.$C = null;
        this.$B = 0;
        this.$y = 0;
        this.$u = false;
        this.$w = null;
        this.$x = null;
        this.$p = null;
        this.$t = null;
        VEL.Wordwall.Core.Application.App.call(this);
        VEL.Wordwall.Global.Modules.app = this;
        this.$r = ServerModel.fontStackId;
        this.$s = new l();
        this.$q = new p(this);
        this.$z = new q();
        this.$v = new VEL.Wordwall.Global.Controls.Control.$ctor1(".js-play-preload");
        this.$A = VEL.Wordwall.Global.Helpers.SettingsHelper.get$2("session_id", null);
        if(ss.isNullOrUndefined(this.$A)) {
            this.$A = ss.getHashCode(this).toString();
            VEL.Wordwall.Global.Helpers.SettingsHelper.set("session_id", this.$A, true)
        }
        this.$t = n.$0();
        if(!(ServerModel.templateId === undefined)) {
            var a = VEL.Wordwall.Core.Application.TemplateManager.getTemplate(ServerModel.templateId, true);
            ServerModel.templateId = a.get_id();
            this.$c(ServerModel.templateId, 0)
        }
    };
    n.__typeName = "VEL.Wordwall.Application.Client.ClientApp";
    n.$0 = function() {
        if(ss.isNullOrEmptyString(ServerModel.googleClassroomCourseWorkID)) {
            return null
        }
        return new s(ServerModel.googleClassroomClientID, ServerModel.googleClassroomApiKey, ServerModel.googleClassroomCourseID, ServerModel.googleClassroomCourseWorkID)
    };
    global.VEL.Wordwall.Application.Client.ClientApp = n;
    var o = function() {};
    o.__typeName = "VEL.Wordwall.Application.Client.FullscreenSeleniumHook";
    global.VEL.Wordwall.Application.Client.FullscreenSeleniumHook = o;
    var p = function(a) {
        this.$c = false;
        this.$a = 20;
        this.$b = false;
        this.$9 = null;
        this.$9 = a;
        this.$0()
    };
    p.__typeName = "VEL.Wordwall.Application.Client.Documents.DocumentStore";
    global.VEL.Wordwall.Application.Client.Documents.DocumentStore = p;
    var q = function() {};
    q.__typeName = "VEL.Wordwall.Application.Client.Documents.ResultsStore";
    global.VEL.Wordwall.Application.Client.Documents.ResultsStore = q;
    var r = function(a, b, c, d) {
        this.$c = null;
        this.$b = null;
        this.$d = null;
        this.$e = null;
        this.$a = null;
        r.$0(a, "googleClassroomClientID", "Google Classroom assignment client ID");
        this.$c = a;
        r.$0(b, "googleClassroomApiKey", "Google Classroom assignment API key");
        this.$b = b;
        r.$0(c, "googleClassroomCourseID", "Google Classroom course ID");
        this.$d = c;
        r.$0(d, "googleClassroomCourseWorkID", "Google Classroom course work ID");
        this.$e = d
    };
    r.__typeName = "VEL.Wordwall.Application.Client.GoogleClassroom.$0";
    r.$0 = function(a, b, c) {
        if(ss.isNullOrUndefined(a)) {
            throw new ss.ArgumentNullException(b, "The " + c + " is null.")
        } else {
            if(ss.isNullOrEmptyString(a)) {
                throw new ss.ArgumentException("The " + c + " is missing.", b)
            }
        }
    };
    var s = function(a, b, c, d) {
        this.$3 = null;
        this.$2 = null;
        this.$4 = null;
        this.$1$1 = null;
        this.$3 = new q();
        this.$2 = new r(a, b, c, d)
    };
    s.__typeName = "VEL.Wordwall.Application.Client.GoogleClassroom.GoogleClassroomApplicationAssignment";
    s.$0 = function(a) {
        return (a & 4) !== 0
    };
    global.VEL.Wordwall.Application.Client.GoogleClassroom.GoogleClassroomApplicationAssignment = s;
    var t = function(a, b) {
        this.$2 = null;
        this.$1$1 = null;
        this.set_studentSubmission(a);
        this.$2 = b
    };
    t.__typeName = "VEL.Wordwall.Application.Client.GoogleClassroom.GoogleClassroomUserAssignmentData";
    global.VEL.Wordwall.Application.Client.GoogleClassroom.GoogleClassroomUserAssignmentData = t;
    ss.initClass(l, k, {
        $3: function(a) {
            if(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && !(window.navigator.standalone === true)) {
                if(a) {
                    var b = window.location.href;
                    b += ((b.indexOf("?") !== -1) ? "&" : "?");
                    b += "footer=false&nofullscreen";
                    window.open(b, "_blank")
                } else {
                    this.$2()
                }
                return
            }
            if(o.forcePseudo) {
                this.$2();
                return
            }
            this.$6 = true;
            var c = $(".js-activity-wrapper");
            if(c.length === 0) {
                return
            }
            var d = c.get(0);
            if(d.requestFullscreen || d.msRequestFullscreen || d.mozRequestFullScreen || d.webkitRequestFullscreen) {
                if(d.requestFullscreen) {
                    d.requestFullscreen()
                } else {
                    if(d.msRequestFullscreen) {
                        d.msRequestFullscreen()
                    } else {
                        if(d.mozRequestFullScreen) {
                            d.mozRequestFullScreen()
                        } else {
                            d.webkitRequestFullscreen()
                        }
                    }
                }
            } else {
                this.$2()
            }
            $(".js-activity-wrapper").addClass("is-fullscreen");
            this.$5 = window.setTimeout(ss.mkdel(this, function() {
                if(!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || $("#pseudo_full_screen").is(":visible")) && this.$6) {
                    this.$2()
                }
            }), 1500)
        },
        $4: function() {
            if(this.$5 !== 0) {
                window.clearTimeout(this.$5);
                this.$5 = 0
            }
            $(".js-activity-wrapper").removeClass("is-fullscreen");
            $(window).trigger("resize");
            if($("#pseudo_full_screen").is(":visible")) {
                this.$1()
            } else {
                try {
                    if(document.exitFullscreen) {
                        document.exitFullscreen()
                    } else {
                        if(document.msExitFullscreen) {
                            document.msExitFullscreen()
                        } else {
                            if(document.mozCancelFullScreen) {
                                document.mozCancelFullScreen()
                            } else {
                                if(document.webkitExitFullscreen) {
                                    document.webkitExitFullscreen()
                                }
                            }
                        }
                    }
                } catch (a) {}
            }
        },
        $0: function() {
            if(!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || $("#pseudo_full_screen").is(":visible"))) {
                $(".js-activity-wrapper").removeClass("is-fullscreen");
                $(window).trigger("resize")
            }
            this.$6 = false
        },
        $2: function() {
            $("body").css("overflow", "hidden");
            $("#pseudo_full_screen").addClass("is-visible");
            $("#pseudo_full_screen").append($(".js-activity-wrapper"));
            $(".js-activity-wrapper").addClass("is-fullscreen")
        },
        $1: function() {
            $("body").css("overflow", "");
            $(".js-activity-block").append($(".js-activity-wrapper"));
            $("#pseudo_full_screen").removeClass("is-visible")
        }
    });
    ss.initClass(m, k, {
        $2: function() {
            return this.$1$1
        },
        $3: function(a) {
            this.$1$1 = a
        },
        $0: function() {
            return this.$1$2
        },
        $1: function(a) {
            this.$1$2 = a
        },
        $6: function() {
            return this.$1$3
        },
        $7: function(a) {
            this.$1$3 = a
        },
        $4: function() {
            return this.$1$4
        },
        $5: function(a) {
            this.$1$4 = a
        }
    });
    //class we are interested in for public leaderboards
    ss.initClass(n, k, {
        setHomework: function(a, b, c, d) {
            this.$z.setHomework(a, b, c, d)
        },
        setPreloader: function(a) {
            this.$p = a
        },
        startScreenshot: function(a, b, c) {
            this.setFontStackId(c, false);
            this.startGame(2, 0, a, b, null)
        },
        startFullScreen: function() {
            var a = this.$B === 4 || this.$B === 10;
            this.$s.$3(a)
        },
        stopFullScreen: function() {
            this.$s.$4()
        },
        isFullScreen: function() {
            return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || $("#pseudo_full_screen").is(":visible")
        },
        triggerAutoSave: function() {
            this.$q.triggerAutoSave()
        },
        forceAutoSave: function() {
            this.$q.forceAutoSave()
        },
        enableAutoSave: function(a) {
            this.$q.enableAutoSave(a)
        },
        setThemeId: function(a, b) {
            this.$7(5);
            if(a === 0) {
                return
            }
            this.$C.selected = VEL.Wordwall.Core.View.Themes.ThemeHelper.getTheme(a);
            if(b) {
                this.destroyView();
                this.$k()
            }
        },
        getThemeSelection: function() {
            return this.$C
        },
        setFontStackId: function(a, b) {
            this.$7(4);
            this.$r = a;
            if(b) {
                this.destroyView();
                this.$k()
            }
        },
        getFontStackId: function() {
            return this.$r
        },
        new$1: function(a, b) {
            var c = this.createDocument(b, a);
            if(!c.hasEditor()) {
                this.$q.save(0, 0, ServerModel.userId, ServerModel.localeId, function(d, e) {
                    var f = "/resource?guid=" + e + "&format=" + 1;
                    window.location.href = f
                }, null, null, false);
                return null
            }
            return c
        },
        restore: function(a) {
            var b = this.$q.restore(a);
            this.set_document(b);
            return b
        },
        open: function(a, b, c, d) {
            this.$q.open(a, b, c, null, this.$B, ss.mkdel(this, function(e) {
                this.$c(e.get_template().get_id(), 0);
                this.set_document(e);
                d(e)
            }))
        },
        startGame: function(a, b, c, d, e) {
            this.$7(6);
            this.stopGame();
            this.$B = a;
            var f = e;
            if(ss.isNullOrUndefined(f)) {
                f = ServerModel.templateId
            }
            this.$c(f, d);
            if(this.$B === 4) {
                this.$9(c, b, e);
                return
            }
            this.$q.open(c, true, b, e, this.$B, ss.mkdel(this, function(g) {
                this.$f(g, e)
            }))
        },
        startTestGame: function(a, b, c) {
            this.stopGame();
            this.$B = 5;
            this.$c(ServerModel.templateId, a);
            this.$q.openTest(b, c, this.$B, ss.mkdel(this, function(d) {
                this.$f(d, null)
            }))
        },
        onStartComplete: function() {
            if(VEL.Wordwall.Global.Helpers.DeviceHelper.isPhoneSized() && (this.$B === 1 || this.$B === 9)) {
                this.onToggleFullscreen(true)
            }
            if(this.$8()) {
                return
            }
            var a = ss.isValue(this.get_document()) && this.get_document().get_template().get_id() !== ServerModel.templateId;
            var b = a && !n.$1;
            if(b) {
                n.$1 = true
            }
            var c = "/resourceajax/trackplay?activityId=" + ServerModel.activityId + "&templateId=" + this.get_document().get_template().get_id() + "&themeId=" + this.$C.selected.id + "&firstConvert=" + b;
            $.ajax(c, {})
        },
        save: function(a, b, c, d, e, f) {
            this.$q.save(a, b, ServerModel.userId, ServerModel.localeId, c, d, e, f)
        },
        saveOptions: function(a, b) {
            this.$q.saveOptions(a, b)
        },
        onHomeworkSubmission: function(a, b, c) {
            this.$l(null);
            this.$z.onHomeworkSubmission(a, ss.mkdel(this, function(d) {
                this.$i(d, b, c)
            }), c)
        },
        $i: function(a, b, c) {
            this.$l(a);
            if(this.get_isGoogleClassroomAssignment() && !this.get_activeGame().get_isRestartEnabled()) {
                this.$n(b, c)
            } else {
                b()
            }
        },
        $l: function(a) {
            if(this.get_isGoogleClassroomAssignment()) {
                this.$t.set_homeworkSubmission(a)
            }
        },
        onToggleFullscreen: function(a) {
            var b = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || $("#pseudo_full_screen").is(":visible");
            if(a === b) {
                return b
            }
            if(ss.isNullOrUndefined(a)) {
                a = !b
            }
            if(ss.unbox(a)) {
                var c = this.$B === 4 || this.$B === 10;
                this.$s.$3(c)
            } else {
                this.$s.$4()
            }
            return !b
        },
        onRestartGame: function() {
            if(this.$B === 9 || this.$B === 10) {
                this.onExitAssignment()
            } else {
                this.restart()
            }
        },
        //the next 2 functions check and add entries to the leaderboard
        onCheckLeaderboard: function(a, b, c, d) {
            console.log("leadeboard checked by modded script!!!")
            var e = "/leaderboardajax/getentryrank";
            var f = {};
            f.score = b;
            f.time = c;
            f.activityId = ServerModel.activityId;
            f.templateId = a;
            $.ajax({
                type: "GET",
                url: e,
                data: f,
                success: function(g, h, i) {
                    d(parseInt(g.toString()))
                },
                error: function(g, h, i) {
                    d(-1)
                }
            })
        },
        onAddLeaderboard: function(a, b, c, d, e, f, g) {
            var h = "/leaderboardajax/addentry";
            var i = {};
            i.score = b;
            i.time = c;
            i.name = a;
            i.mode = d;
            i.activityId = ServerModel.activityId;
            i.templateId = e;
            $.ajax({
                type: "POST",
                url: h,
                data: i,
                success: function(j, w, x) {
                    f(parseInt(j.toString()))
                },
                error: function(j, w, x) {
                    g()
                }
            })
        },
        onSetTestCard: function(a) {
            if(ss.isNullOrUndefined(a)) {
                return
            }
            this.setSetting("tc_page", a.page.toString(), true);
            this.setSetting("tc_section", a.section.toString(), true)
        },
        onGetTestCard: function() {
            var a = new VEL.Wordwall.Core.Application.TestCardSetting();
            a.section = parseInt(this.getSetting("tc_section", "0"));
            a.page = parseInt(this.getSetting("tc_page", "0"));
            return a
        },
        onSetAudioSetting: function(a, b) {
            var c = ss.Enum.getName(VEL.Wordwall.Global.Enums.AudioSetting, a).toLowerCase();
            this.setSetting(c, b.toString(), false)
        },
        onGetAudioSetting: function(a) {
            var b = ss.Enum.getName(VEL.Wordwall.Global.Enums.AudioSetting, a).toLowerCase();
            var c = this.getSetting(b, "");
            if(c === "") {
                var d = "mute";
                c = this.getSetting(d, "");
                if(c === "") {
                    var e;
                    if(a === 0) {
                        switch(VEL.Wordwall.Global.Server.Switches.getInteger(VEL.Wordwall.Global.Server.Switches.static$1, "Music_Default_Mute_Setting")) {
                            case 1:
                                e = false;
                                break;
                            case 2:
                                e = this.get_document().get_template().get_themeRequirements().musicType !== 1;
                                break;
                            case 0:
                            default:
                                e = true;
                                break
                        }
                    } else {
                        e = false
                    }
                    return e
                }
            }
            return /^\s*true\s*$/i.test(c)
        },
        onGetLeaderboardEntries: function(a, b, c, d) {
            var e;
            var f = {};
            if(b) {
                e = "/resultajax/getleaderboardentries";
                f.homeworkGameId = ServerModel.homeworkGameId
            } else {
                e = "/leaderboardajax/getentries";
                f.activityId = ServerModel.activityId;
                f.templateId = a
            }
            $.ajax({
                type: "GET",
                url: e,
                data: f,
                success: ss.mkdel(this, function(g, h, i) {
                    var j = Enumerable.from(VEL.Wordwall.Core.Toolbox.Serialization.JsonHelper.deserializeEnumerable(VEL.Wordwall.Global.Json.LeaderboardEntryJson).call(null, ss.cast(g, String))).toArray();
                    c(j);
                    if(ss.isValue(VEL.Wordwall.Global.Modules.activityPage)) {
                        VEL.Wordwall.Global.Modules.activityPage.updateLeaderboard(j, this.get_document().get_template().get_leaderboardMode())
                    }
                }),
                error: function(g, h, i) {
                    d()
                }
            })
        },
        onExitAssignment: function() {
            if(ss.isValue(VEL.Wordwall.Global.Modules.playPage)) {
                VEL.Wordwall.Global.Modules.playPage.restart()
            }
        },
        setSetting: function(a, b, c) {
            VEL.Wordwall.Global.Helpers.SettingsHelper.set(a, b, c)
        },
        getSetting: function(a, b) {
            return VEL.Wordwall.Global.Helpers.SettingsHelper.get$2(a, b)
        },
        onActivityContentChanged: function() {
            if(ss.isValue(VEL.Wordwall.Global.Modules.activityPage)) {
                VEL.Wordwall.Global.Modules.activityPage.onContentChanged()
            }
        },
        restart: function() {
            if(ss.isNullOrUndefined(this.get_activeGame())) {
                return
            }
            this.$a();
            this.$m(null)
        },
        onViewBuilt: function() {
            this.$u = true
        },
        onViewReady: function() {
            if(ss.isValue(this.$w) && ss.isValue(this.$x)) {
                this.$w += ", viewReady:" + this.$x.milliseconds()
            }
            this.$v.set_isVisible(false)
        },
        destroyView: function() {
            window.onbeforeunload = null;
            VEL.Wordwall.Core.Application.App.prototype.destroyView.call(this)
        },
        $9: function(a, b, c) {
            var d = c;
            if(ss.isNullOrUndefined(d)) {
                d = ServerModel.templateId
            }
            var e = d;
            var f = VEL.Wordwall.Core.Application.TemplateManager.createTemplate(e);
            var g = new VEL.Wordwall.View.ClientView(this, false);
            var h = ss.mkdel(this, function() {
                g.dispose();
                this.$v.set_isVisible(true);
                this.set_activeGame(null);
                this.$q.open(a, true, b, c, this.$B, ss.mkdel(this, function(j) {
                    this.$f(j, c)
                }))
            });
            var i = ss.mkdel(this, function() {
                this.$v.set_isVisible(false)
            });
            this.set_activeGame(new VEL.Wordwall.Core.Games.PreStartGame(g, this, h));
            g.onPreStart(ServerModel.activityTitle, f.get_title(), f.get_description(), i)
        },
        $8: function() {
            var a = ServerModel.activityId < 0;
            return a || ss.isNullOrUndefined(this.get_activeGame()) || this.get_activeGame().get_isHomeworkClient() || this.$B === 2
        },
        $f: function(a, b) {
            this.$7(8);
            this.set_document(a);
            this.get_document().set_title(ServerModel.activityTitle);
            if(this.$B === 1) {
                var c = this.get_document().get_template().getValidity().get_hasErrors();
                if(c) {
                    $.get("/resourceajax/seterror?activityId=" + ServerModel.activityId)
                }
            }
            if(ss.isValue(b) && b !== 0 && b !== this.get_document().get_template().get_id()) {
                this.convertDocument(ss.unbox(b))
            }
            this.get_document().setInteractive();
            if(this.$B === 1) {
                VEL.Wordwall.Global.Modules.activityPage.onDocumentOpen()
            }
            this.setThemeId(this.$C.selected.id, true);
            if(this.$B === 1) {
                this.$7(9);
                VEL.Wordwall.Global.Modules.activityPage.populateOptionsSection();
                VEL.Wordwall.Global.Modules.activityPage.populateThemesList();
                VEL.Wordwall.Global.Modules.activityPage.populateTemplates();
                VEL.Wordwall.Global.Modules.activityPage.populateLeaderboard();
                this.$7(10)
            }
        },
        $k: function() {
            this.$7(11);
            this.$u = false;
            this.$x = new ss.Stopwatch();
            this.$x.start();
            this.$w = "";
            if(this.$y !== 0) {
                window.clearTimeout(this.$y);
                this.$y = 0
            }
            this.$v.set_isVisible(true);
            var a = ss.cast(this.get_document().get_selectedGame(), VEL.Wordwall.Core.Application.IGame_Application);
            var b = this.$B !== 2;
            var c = this.get_document().get_template().get_contentModel().getUnicodeRange() | VEL.Wordwall.Core.DataStructures.UnicodeRange.getUnicodeRange(ServerModel.languageId);
            var d = VEL.Wordwall.Global.Server.Switches.getThemeAudio(VEL.Wordwall.Global.Server.Switches.static$1, this.$C.selected.id);
            VEL.Wordwall.View.Assets.AssetLoader.start(this.$C.selected, this.$r, c, a.get_template(), b, true, ss.mkdel(this, this.$g), ss.mkdel(this, this.$e), this.onGetAudioSetting(0), d);
            this.$y = window.setTimeout(ss.mkdel(this, function() {
                this.$d();
                if(this.$u) {
                    return
                }
                var e = VEL.Wordwall.View.Assets.AssetLoader.getPreloadStatus() + "|" + VEL.Wordwall.View.Assets.Reusables.ReusableTest.getMemory() + "kB|" + this.$w;
                VEL.Wordwall.Global.LogHelper.event("theme_timeout", e);
                VEL.Wordwall.Global.Shell.writeError(e)
            }), 30000)
        },
        $d: function() {
            var a = VEL.Wordwall.View.Assets.AssetLoader.getErrors();
            if(ss.isValue(a) && Enumerable.from(a).any()) {
                VEL.Wordwall.Global.LogHelper.event("asset_error", a.join("|"))
            }
        },
        $e: function(a, b) {
            if(ss.isValue(VEL.Wordwall.Global.Modules.activityPage)) {
                VEL.Wordwall.Global.Modules.activityPage.onAssetLoaded(a, b)
            }
            if(ss.isValue(VEL.Wordwall.Global.Modules.playPage)) {
                VEL.Wordwall.Global.Modules.playPage.onAssetLoaded(a, b)
            }
        },
        $g: function() {
            this.$d();
            this.$w += ", gamePreload:" + this.$x.milliseconds();
            if(this.get_document().get_canPreBuild()) {
                var a = "/resourceajax/getprebuild?guid=" + ServerModel.activityGuid + "&templateId=" + this.get_document().get_template().get_id();
                $.get(a, ss.mkdel(this, function(b) {
                    this.get_document().setPrebuild(ss.cast(b, String));
                    this.$j()
                }))
            } else {
                this.$j()
            }
        },
        $j: function() {
            this.$w += ", prebuildReady:" + this.$x.milliseconds();
            this.$a();
            if(this.$B === 2) {
                this.$m(ss.mkdel(this, function() {
                    this.$v.set_isVisible(false)
                }))
            } else {
                this.$m(ss.mkdel(this, this.$h))
            }
        },
        $h: function() {
            this.$w += ", gameStarted:" + this.$x.milliseconds()
        },
        $m: function(a) {
            if(ss.isNullOrUndefined(this.get_document()) || ss.isNullOrUndefined(this.get_document().get_selectedGame())) {
                return
            }
            this.stopGame();
            this.createGame();
            if(ss.isValue(this.view)) {
                this.get_activeGame().set_view$1(this.view);
                this.view.set_game(this.get_activeGame())
            }
            this.get_activeGame().registerClient(this.client.guid, this.client.forename, this.client.surname);
            this.get_activeGame().onGameOverChanged(this.gameOverOptions);
            var b = this.get_document().get_title();
            if(ss.isNullOrUndefined(b)) {
                b = ServerModel.activityTitle
            }
            var c = b;
            this.get_activeGame().onBuildAndStart(c, this.get_document().get_seed(), this.$B);
            this.get_document().set_preBuild(this.get_activeGame().get_prebuild());
            if(!ss.staticEquals(a, null)) {
                a()
            }
        },
        $a: function() {
            this.destroyView();
            this.view = new VEL.Wordwall.View.ClientView(this, this.$B === 2)
        },
        $c: function(e, f) {
            this.$C = new VEL.Wordwall.Core.View.Themes.ThemeSelection();
            if(this.$B === 5 && f !== 0) {
                this.$C.selected = VEL.Wordwall.Core.View.Themes.ThemeHelper.getTheme(f);
                this.$C.available = [this.$C.selected];
                return
            }
            var g = Enumerable.from(VEL.Wordwall.Core.View.Themes.ThemeHelper.getAvailableThemeIds(e)).select(VEL.Wordwall.Core.View.Themes.ThemeHelper.getTheme).toArray();
            var h = Array.prototype.slice.call(g);
            for(var i = 0; i < h.length; i++) {
                var j = h[i];
                var E = VEL.Wordwall.Global.Server.Switches.getThemeAction(VEL.Wordwall.Global.Server.Switches.static$1, j.id, e);
                if(E === 0) {
                    E = VEL.Wordwall.Global.Server.Switches.getThemeAction(VEL.Wordwall.Global.Server.Switches.static$1, j.id, 0)
                }
                switch(E) {
                    case 1:
                        j.isHidden = true;
                        break;
                    case 2:
                    case 4:
                    case 5:
                    case 3:
                        j.isHidden = false;
                        break;
                    case 6:
                        if(j.isHidden) {
                            var F = this.$b(j, g);
                            if(ss.isValue(F)) {
                                F.isHidden = true;
                                j.isHidden = false;
                                var G = ss.indexOf(g, j);
                                var H = ss.indexOf(g, F);
                                g[G] = F;
                                g[H] = j;
                                if(F.id === f) {
                                    f = j.id
                                }
                            }
                        }
                        break
                }
                if(j.id === f && j.isHidden) {
                    var I = this.$b(j, g);
                    if(ss.isValue(I) && !I.isHidden) {
                        f = I.id
                    } else {
                        j.isHidden = false
                    }
                }
            }
            if(Enumerable.from(g).all(function(u) {
                    return u.isHidden
                })) {
                var J = Enumerable.from(g).firstOrDefault(function(u) {
                    return u.id === f
                }, ss.getDefaultValue(VEL.Wordwall.Core.View.Themes.Theme)) || Enumerable.from(g).first();
                J.isHidden = false
            }
            var K = Enumerable.from(g).where(function(u) {
                return u.isHidden
            }).toArray();
            for(var L = 0; L < K.length; L++) {
                var M = K[L];
                ss.remove(g, M)
            }
            var N = Array.prototype.slice.call(g);
            for(var a = 0; a < N.length; a++) {
                var b = N[a];
                var c = VEL.Wordwall.Global.Server.Switches.getThemeAction(VEL.Wordwall.Global.Server.Switches.static$1, b.id, e);
                if(c === 0) {
                    c = VEL.Wordwall.Global.Server.Switches.getThemeAction(VEL.Wordwall.Global.Server.Switches.static$1, b.id, 0)
                }
                switch(c) {
                    case 3:
                        ss.remove(g, b);
                        ss.insert(g, 0, b);
                        break;
                    case 5:
                        ss.remove(g, b);
                        g.push(b);
                        break;
                    case 4:
                        if(!ss.referenceEquals(b, Enumerable.from(g).first())) {
                            ss.remove(g, b);
                            ss.insert(g, 1, b)
                        }
                        break
                }
            }
            this.$C.available = Array.prototype.slice.call(g);
            var d = ((f !== 0) ? Enumerable.from(g).singleOrDefault(function(u) {
                return u.id === f
            }, ss.getDefaultValue(VEL.Wordwall.Core.View.Themes.Theme)) : null);
            if(ss.isValue(d)) {
                this.$C.selected = d
            } else {
                this.$C.selected = Enumerable.from(g).first()
            }
        },
        $b: function(a, b) {
            return Enumerable.from(b).firstOrDefault(function(c) {
                return (a.baseId === c.id || c.baseId === c.id) && !ss.referenceEquals(a, c) && !c.isHidden
            }, ss.getDefaultValue(VEL.Wordwall.Core.View.Themes.Theme))
        },
        $7: function(a) {
            if(ss.isValue(this.$p)) {
                this.$p.info(a)
            }
        },
        get_googleClassroom: function() {
            this.$o();
            return this.$t
        },
        get_googleClassroomAssignment: function() {
            this.$o();
            return this.$t
        },
        get_isGoogleClassroomAssignment: function() {
            return ss.isValue(this.$t)
        },
        $o: function() {
            if(!this.get_isGoogleClassroomAssignment()) {
                throw new ss.InvalidOperationException("This activity is not a Google Classroom assignment.")
            }
        },
        $n: function(a, b) {
            this.$t.turnInStudentSubmission().continueWith(function(c) {
                if(c.isCompleted()) {
                    a()
                } else {
                    b()
                }
            })
        }
    }, VEL.Wordwall.Core.Application.App, [VEL.Wordwall.Core.Application.IApplication, VEL.Wordwall.Core.Application.IApplication_Game, VEL.Wordwall.Core.Toolbox.Threading.IThreadScope]);
    ss.initClass(o, k, {});
    ss.initClass(p, k, {
        open: function(a, b, c, d, e, f) {
            var g = a === "00000000000000000000000000000000";
            if(!g && (ServerModel.userId === undefined || ServerModel.activityId === undefined)) {
                b = false
            }
            var h = ss.mkdel(this, function(i) {
                this.$6(i, b, c, d, e, function() {
                    f(i)
                })
            });
            this.$1(a, h)
        },
        openTest: function(a, b, c, d) {
            var e = (new ss.Random()).nextMinMax(0, 100000);
            window.localStorage["test.doc"] = a;
            window.localStorage["test.config"] = b;
            this.open("00000000000000000000000000000000", true, e, null, c, d)
        },
        restore: function(a) {
            if(ss.referenceEquals(window.localStorage["autosave.guid"], a)) {
                var b = window.localStorage["autosave.doc"];
                var c = VEL.Wordwall.Global.Helpers.Base64Helper.base64ToDataView(b);
                var d = VEL.Wordwall.Core.Application.DocumentFactory.create(c);
                d.set_guid(a);
                return d
            }
            return null
        },
        save: function(a, b, c, d, e, f, g, h) {
            this.$c = true;
            if(!ss.isNullOrEmptyString(g)) {
                this.$9.get_document().set_title(g)
            }
            if(c > 0) {
                this.$9.get_document().set_userId(c)
            }
            if(d > 0) {
                this.$9.get_document().set_localeId(d)
            }
            if(a > 0) {
                ServerModel.activityGuid = this.$9.get_document().changeGuid()
            }
            this.$8(a, b, function(i, j) {
                ServerModel.activityGuid = j;
                e(i, j)
            }, f, h)
        },
        saveOptions: function(a, b) {
            var c = this.$9.get_document();
            if(ss.isNullOrUndefined(c)) {
                return
            }
            var d = c.writeOptions(false);
            var e = {
                type: "POST",
                url: "/resourceajax/setoptions?activityId=" + ServerModel.activityId + "&templateId=" + c.get_template().get_id() + "&format=" + c.get_format() + "&scope=" + a,
                data: d,
                cache: false,
                contentType: "application/xml",
                success: function(f, g, h) {
                    b()
                },
                error: function(f, g, h) {
                    b()
                }
            };
            $.ajax(e)
        },
        forceAutoSave: function() {
            this.$9.get_document().set_title((new VEL.Wordwall.Global.Controls.Input.$ctor1(".js-activity-title")).get_value());
            var a = this.$9.get_document().save();
            this.$4(this.$9.get_document(), a)
        },
        triggerAutoSave: function() {
            this.$a = 0
        },
        enableAutoSave: function(a) {
            if(a) {
                window.setInterval(ss.mkdel(this, function() {
                    if(this.$c) {
                        return
                    }
                    this.$a++;
                    if(this.$a === 8) {
                        $(".js-auto-saving").fadeIn()
                    }
                    if(this.$a === 10 && ss.isValue(this.$9.get_document())) {
                        if(this.$b) {
                            this.$a--;
                            return
                        }
                        this.$7()
                    }
                }), 200)
            } else {
                this.$c = true
            }
        },
        $6: function(a, b, c, d, e, f) {
            a.set_seed(c);
            if(ss.isValue(d) && a.get_template().get_id() !== d) {
                a.convert(ss.unbox(d), false)
            }
            if(b) {
                this.$3(a, d, e, f)
            } else {
                this.$5(a, f)
            }
        },
        $5: function(a, b) {
            if(!ss.isNullOrEmptyString(ServerModel.activityGuid)) {
                a.set_guid(ServerModel.activityGuid)
            }
            b()
        },
        $1: function(a, b) {
            if(a === "00000000000000000000000000000000") {
                var c = window.localStorage["test.doc"];
                var d = VEL.Wordwall.Global.Helpers.Base64Helper.base64ToDataView(c);
                var e = VEL.Wordwall.Core.Application.DocumentFactory.create(d);
                b(e);
                return
            }
            var f = "//user.cdn.wordwall.net/documents/" + a;
            var g = "//user.cdn.wordwall.net/documents/" + a;
            this.$2(f, function(h) {
                h.set_guid(a);
                b(h)
            }, function() {})
        },
        $2: function(a, b, c) {
            var d = new XMLHttpRequest();
            d.open("GET", a, true);
            d.responseType = "arraybuffer";
            d.onload = function(e) {
                if(d.status === 200) {
                    var f = ss.cast(d.response, Array);
                    if(ss.isNullOrUndefined(f) || f.length === 0) {
                        c()
                    } else {
                        var g = new DataView((new Uint8Array(f)).buffer);
                        var h = VEL.Wordwall.Core.Application.DocumentFactory.create(g);
                        b(h)
                    }
                } else {
                    c()
                }
            };
            d.send()
        },
        $8: function(a, b, c, d, e) {
            var f = this.$9.get_document().get_guid();
            var g = this.$9.get_document().save();
            var h = "/createajax/upload?guid=" + f + "&activityId=" + a + "&userId=" + this.$9.get_document().get_userId() + "&isAIGenerated=" + e;
            if(ss.isValue(b)) {
                h += "&folderId=" + b
            }
            h += "&screenshot=" + VEL.Wordwall.Global.Helpers.SettingsHelper.get("enable_screenshot", true);
            h += "&originalActivityId=" + ((ServerModel.originalActivityId === undefined) ? 0 : ServerModel.originalActivityId);
            var i = new Uint8Array(g.byteLength);
            for(var j = 0; j < g.byteLength; j++) {
                i[j] = g.getUint8(j)
            }
            var v = new XMLHttpRequest();
            v.open("POST", h, true);
            v.onreadystatechange = function(u) {
                if(v.readyState === 4) {
                    if(v.status === 200) {
                        var x = JSON.parse(v.responseText);
                        VEL.Wordwall.Global.Helpers.AutoSaveHelper.clear();
                        c(x.ActivityId, x.ActivityGuid)
                    } else {
                        if(!ss.staticEquals(d, null)) {
                            d()
                        }
                    }
                }
            };
            v.setRequestHeader("Content-Type", "application/octet-stream");
            v.send(i)
        },
        $3: function(a, b, c, d) {
            if(a.get_guid() === "00000000000000000000000000000000") {
                var e = window.localStorage["test.config"];
                a.readOptions(e);
                d();
                return
            }
            var f = b;
            if(ss.isNullOrUndefined(f)) {
                f = a.get_template().get_id()
            }
            var g = f;
            var h = {
                type: "GET",
                dataType: "text",
                url: "/resourceajax/getoptions?templateId=" + g + "&activityId=" + ServerModel.activityId + "&startMode=" + c,
                success: function(i, j, v) {
                    if(ss.isInstanceOfType(i, String)) {
                        a.readOptions(i.toString())
                    }
                    d()
                },
                error: function(i, j, v) {
                    d()
                }
            };
            $.ajax(h)
        },
        $0: function() {
            try {
                for(var a = 0; a < window.localStorage.length; a++) {
                    var b = window.localStorage.key(a);
                    if(ss.startsWithString(b, "doc.value")) {
                        window.localStorage.clear();
                        break
                    }
                }
            } catch (c) {}
        },
        $7: function() {
            this.$b = true;
            var a = this.$9.get_document();
            a.set_title((new VEL.Wordwall.Global.Controls.Input.$ctor1(".js-activity-title")).get_value());
            a.saveAsync(ss.mkdel(this, function(b) {
                this.$4(a, b)
            }))
        },
        $4: function(a, b) {
            var c = ss.Int32.div(b.byteLength * 4, 3);
            if(c > 3145728) {
                this.$b = false;
                return
            }
            var d = VEL.Wordwall.Global.Helpers.Base64Helper.dataViewToBase64(b);
            var e = a.get_guid();
            window.localStorage["autosave.guid"] = e;
            window.localStorage["autosave.templateid"] = a.get_template().get_id().toString();
            window.localStorage["autosave.doc"] = d;
            window.localStorage["autosave.user"] = ServerModel.userId.toString();
            window.localStorage["autosave.title"] = a.get_title();
            window.localStorage["autosave.time"] = VEL.Wordwall.Global.Extensions.DateTimeExtensions.toUnix(new Date()).toString();
            window.setTimeout(function() {
                $(".js-auto-saving").fadeOut(250)
            }, 1000);
            this.$b = false
        }
    });
    ss.initClass(q, k, {
        setHomework: function(a, b, c, d) {
            var e = {
                type: "POST",
                url: "/MyResultsAjax/SetHomework?activityId=" + a + "&code=" + b,
                cache: false,
                success: function(f, g, h) {
                    c()
                },
                error: function(f, g, h) {
                    d()
                }
            };
            $.ajax(e)
        },
        onHomeworkSubmission: function(a, b, c) {
            if(ServerModel.isFull) {
                b(null);
                return
            }
            var d = a.toXml();
            var e = {
                type: "POST",
                url: "/MyResultsAjax/AddHomeworkSubmission?homeworkGameId=" + ServerModel.homeworkGameId + "&name=" + encodeURIComponent(a.get_player().get_fullName()) + "&score=" + a.get_score() + "&time=" + a.get_timing() + "&playerGuid=" + a.get_player().guid,
                data: d,
                contentType: "text/xml",
                cache: false,
                success: function(f, g, h) {
                    $.get("/MyResultsAjax/RefreshHomework?homeworkGameId=" + ServerModel.homeworkGameId);
                    b(ss.cast(f, VEL.Wordwall.Global.Json.HomeworkSubmissionInfo))
                },
                error: function(f, g, h) {
                    c()
                }
            };
            $.ajax(e)
        },
        setGoogleClassroomStudentSubmission: function(a, b, c, d) {
            var e = "/MyResultsAjax/SetGoogleClassroomStudentSubmission?homeworkSubmissionId=" + a + "&googleClassroomCourseId=" + encodeURIComponent(b) + "&googleClassroomCourseWorkId=" + encodeURIComponent(c) + "&googleClassroomStudentSubmissionId=" + encodeURIComponent(d);
            return $.ajax({
                type: "POST",
                url: e
            })
        }
    });
    ss.initClass(r, k, {
        $1: function() {
            var a = 0,
                b = new ss.TaskCompletionSource(),
                c, d, e, f;
            var g = ss.mkdel(this, function() {
                try {
                    $sm1: for(;;) {
                        switch(a) {
                            case 0:
                                a = -1;
                                c = this.$2();
                                a = 1;
                                c.continueWith(g);
                                return;
                            case 1:
                                a = -1;
                                d = c.getAwaitedResult();
                                if(ss.isNullOrUndefined(d)) {
                                    e = new VEL.Wordwall.Global.Json.GoogleClassroom.UserState();
                                    e.isSignedIn = false;
                                    b.setResult(e);
                                    return
                                }
                                f = d.getCurrentUserState();
                                a = 2;
                                f.continueWith(g);
                                return;
                            case 2:
                                a = -1;
                                b.setResult(f.getAwaitedResult());
                                return;
                            default:
                                break $sm1
                        }
                    }
                }
                catch (h) {
                    b.setException(ss.Exception.wrap(h))
                }
            });
            g();
            return b.task
        },
        $7: function() {
            var a = 0,
                b = new ss.TaskCompletionSource(),
                c, d, e, f;
            var g = ss.mkdel(this, function() {
                try {
                    $sm1: for(;;) {
                        switch(a) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                if(a === 0) {
                                    a = 1
                                }
                                try {
                                    $sm2: for(;;) {
                                        switch(a) {
                                            case 1:
                                                a = -1;
                                                c = this.$2();
                                                a = 2;
                                                c.continueWith(g);
                                                return;
                                            case 2:
                                                a = -1;
                                                d = c.getAwaitedResult();
                                                e = d.signIn("do-assignment");
                                                a = 3;
                                                e.continueWith(g);
                                                return;
                                            case 3:
                                                a = -1;
                                                e.getAwaitedResult();
                                                a = -1;
                                                break $sm2;
                                            default:
                                                break $sm2
                                        }
                                    }
                                } catch (h) {
                                    h = ss.Exception.wrap(h);
                                    if(ss.isInstanceOfType(h, ss.PromiseException)) {
                                        f = ss.cast(h, ss.PromiseException);
                                        if(!this.$3(f)) {
                                            throw h
                                        }
                                    } else {
                                        throw h
                                    }
                                }
                                a = -1;
                                break $sm1;
                            default:
                                break $sm1
                        }
                    }
                    b.setResult(null)
                }
                catch (h) {
                    b.setException(ss.Exception.wrap(h))
                }
            });
            g();
            return b.task
        },
        $0: function() {
            var a = 0,
                b = new ss.TaskCompletionSource(),
                c, d, e, f;
            var g = ss.mkdel(this, function() {
                try {
                    $sm1: for(;;) {
                        switch(a) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                if(a === 0) {
                                    a = 1
                                }
                                try {
                                    $sm2: for(;;) {
                                        switch(a) {
                                            case 1:
                                                a = -1;
                                                c = this.$2();
                                                a = 2;
                                                c.continueWith(g);
                                                return;
                                            case 2:
                                                a = -1;
                                                d = c.getAwaitedResult();
                                                e = d.forceSignIn("do-assignment");
                                                a = 3;
                                                e.continueWith(g);
                                                return;
                                            case 3:
                                                a = -1;
                                                e.getAwaitedResult();
                                                a = -1;
                                                break $sm2;
                                            default:
                                                break $sm2
                                        }
                                    }
                                } catch (h) {
                                    h = ss.Exception.wrap(h);
                                    if(ss.isInstanceOfType(h, ss.PromiseException)) {
                                        f = ss.cast(h, ss.PromiseException);
                                        if(!this.$3(f)) {
                                            throw h
                                        }
                                    } else {
                                        throw h
                                    }
                                }
                                a = -1;
                                break $sm1;
                            default:
                                break $sm1
                        }
                    }
                    b.setResult(null)
                }
                catch (h) {
                    b.setException(ss.Exception.wrap(h))
                }
            });
            g();
            return b.task
        },
        $3: function(a) {
            var b = VEL.Wordwall.Global.Helpers.GoogleClassroomHelper.exceptionToError(a);
            var c = (ss.isValue(b) ? b.errorCode : null);
            switch(c) {
                case "popup_closed":
                case "access_denied":
                    return true;
                default:
                    return false
            }
        },
        $8: function() {
            var a = 0,
                b = new ss.TaskCompletionSource(),
                c, d, e;
            var f = ss.mkdel(this, function() {
                try {
                    $sm1: for(;;) {
                        switch(a) {
                            case 0:
                                a = -1;
                                c = this.$2();
                                a = 1;
                                c.continueWith(f);
                                return;
                            case 1:
                                a = -1;
                                d = c.getAwaitedResult();
                                e = d.signOut();
                                a = 2;
                                e.continueWith(f);
                                return;
                            case 2:
                                a = -1;
                                e.getAwaitedResult();
                                a = -1;
                                break $sm1;
                            default:
                                break $sm1
                        }
                    }
                    b.setResult(null)
                }
                catch (g) {
                    b.setException(ss.Exception.wrap(g))
                }
            });
            f();
            return b.task
        },
        $4: function() {
            var a = 0,
                b = new ss.TaskCompletionSource(),
                c, d, e, f, g;
            var h = ss.mkdel(this, function() {
                try {
                    $sm1: for(;;) {
                        switch(a) {
                            case 0:
                                a = -1;
                                c = this.$2();
                                a = 1;
                                c.continueWith(h);
                                return;
                            case 1:
                                a = -1;
                                d = c.getAwaitedResult();
                                e = this.$6(d);
                                f = this.$5(d);
                                g = ss.Task.whenAll([e, f]);
                                a = 2;
                                g.continueWith(h);
                                return;
                            case 2:
                                a = -1;
                                g.getAwaitedResult();
                                b.setResult(new t(e.getResult(), f.getResult()));
                                return;
                            default:
                                break $sm1
                        }
                    }
                }
                catch (i) {
                    b.setException(ss.Exception.wrap(i))
                }
            });
            h();
            return b.task
        },
        $6: function(a) {
            var b = 0,
                c = new ss.TaskCompletionSource(),
                d;
            var e = ss.mkdel(this, function() {
                try {
                    $sm1: for(;;) {
                        switch(b) {
                            case 0:
                            case 1:
                            case 2:
                                if(b === 0) {
                                    b = 1
                                }
                                try {
                                    $sm2: for(;;) {
                                        switch(b) {
                                            case 1:
                                                b = -1;
                                                d = a.getMyCourseWorkStudentSubmission(this.$d, this.$e);
                                                b = 2;
                                                d.continueWith(e);
                                                return;
                                            case 2:
                                                b = -1;
                                                c.setResult(d.getAwaitedResult());
                                                return;
                                            default:
                                                break $sm2
                                        }
                                    }
                                } catch (f) {
                                    c.setResult(null);
                                    return
                                }
                                b = -1;
                                break $sm1;
                            default:
                                break $sm1
                        }
                    }
                    c.setResult(null)
                }
                catch (f) {
                    c.setException(ss.Exception.wrap(f))
                }
            });
            e();
            return c.task
        },
        $5: function(a) {
            var b = 0,
                c = new ss.TaskCompletionSource(),
                d, e;
            var f = ss.mkdel(this, function() {
                try {
                    $sm1: for(;;) {
                        switch(b) {
                            case 0:
                            case 1:
                            case 2:
                                if(b === 0) {
                                    b = 1
                                }
                                try {
                                    $sm2: for(;;) {
                                        switch(b) {
                                            case 1:
                                                b = -1;
                                                d = a.listMyTeacherCourses();
                                                b = 2;
                                                d.continueWith(f);
                                                return;
                                            case 2:
                                                b = -1;
                                                e = d.getAwaitedResult();
                                                c.setResult(Enumerable.from(e).firstOrDefault(ss.mkdel(this, function(h) {
                                                    return ss.referenceEquals(h.id, this.$d)
                                                }), ss.getDefaultValue(VEL.Wordwall.Global.Json.GoogleClassroom.Course)));
                                                return;
                                            default:
                                                break $sm2
                                        }
                                    }
                                } catch (g) {
                                    c.setResult(null);
                                    return
                                }
                                b = -1;
                                break $sm1;
                            default:
                                break $sm1
                        }
                    }
                    c.setResult(null)
                }
                catch (g) {
                    c.setException(ss.Exception.wrap(g))
                }
            });
            f();
            return c.task
        },
        $9: function(a) {
            var b = 0,
                c = new ss.TaskCompletionSource(),
                d, e, f;
            var g = ss.mkdel(this, function() {
                try {
                    $sm1: for(;;) {
                        switch(b) {
                            case 0:
                                b = -1;
                                if(a.get_userCanTurnInSubmission() && !a.get_userHasTurnedInSubmission()) {
                                    d = this.$2();
                                    b = 1;
                                    d.continueWith(g);
                                    return
                                } else {
                                    c.setResult(null);
                                    return
                                }
                            case 1:
                                b = -1;
                                e = d.getAwaitedResult();
                                f = e.turnInStudentSubmission(a.get_studentSubmission().courseId, a.get_studentSubmission().courseWorkId, a.get_studentSubmission().id);
                                b = 2;
                                f.continueWith(g);
                                return;
                            case 2:
                                b = -1;
                                f.getAwaitedResult();
                                a.get_studentSubmission().state = "TURNED_IN";
                                c.setResult(a.get_studentSubmission());
                                return;
                            default:
                                break $sm1
                        }
                    }
                }
                catch (h) {
                    c.setException(ss.Exception.wrap(h))
                }
            });
            g();
            return c.task
        },
        $2: function() {
            if(ss.isNullOrUndefined(this.$a)) {
                this.$a = VEL.Wordwall.Global.Interop.GoogleClassroomClient.createDoAssignmentClient(this.$c, this.$b)
            }
            return this.$a
        }
    });
    ss.initClass(s, k, {
        getCurrentUserState: function() {
            return this.$2.$1()
        },
        signInToGoogleClassroom: function() {
            var a = 0,
                b = new ss.TaskCompletionSource(),
                c, d;
            var e = ss.mkdel(this, function() {
                try {
                    $sm1: for(;;) {
                        switch(a) {
                            case 0:
                                a = -1;
                                this.$0();
                                c = this.$2.$7();
                                a = 1;
                                c.continueWith(e);
                                return;
                            case 1:
                                a = -1;
                                c.getAwaitedResult();
                                d = this.loadUserAssignmentData();
                                a = 2;
                                d.continueWith(e);
                                return;
                            case 2:
                                a = -1;
                                d.getAwaitedResult();
                                a = -1;
                                break $sm1;
                            default:
                                break $sm1
                        }
                    }
                    b.setResult(null)
                }
                catch (f) {
                    b.setException(ss.Exception.wrap(f))
                }
            });
            e();
            return b.task
        },
        forceSignInToGoogleClassroom: function() {
            var a = 0,
                b = new ss.TaskCompletionSource(),
                c, d;
            var e = ss.mkdel(this, function() {
                try {
                    $sm1: for(;;) {
                        switch(a) {
                            case 0:
                                a = -1;
                                this.$0();
                                c = this.$2.$0();
                                a = 1;
                                c.continueWith(e);
                                return;
                            case 1:
                                a = -1;
                                c.getAwaitedResult();
                                d = this.loadUserAssignmentData();
                                a = 2;
                                d.continueWith(e);
                                return;
                            case 2:
                                a = -1;
                                d.getAwaitedResult();
                                a = -1;
                                break $sm1;
                            default:
                                break $sm1
                        }
                    }
                    b.setResult(null)
                }
                catch (f) {
                    b.setException(ss.Exception.wrap(f))
                }
            });
            e();
            return b.task
        },
        signOutFromGoogleClassroom: function() {
            this.$0();
            return this.$2.$8()
        },
        $0: function() {
            this.$4 = null
        },
        loadUserAssignmentData: function() {
            var a = 0,
                b = new ss.TaskCompletionSource(),
                c;
            var d = ss.mkdel(this, function() {
                try {
                    $sm1: for(;;) {
                        switch(a) {
                            case 0:
                                a = -1;
                                if(ss.isNullOrUndefined(this.$4)) {
                                    c = this.$2.$4();
                                    a = 1;
                                    c.continueWith(d);
                                    return
                                }
                                a = -1;
                                break $sm1;
                            case 1:
                                a = -1;
                                this.$4 = c.getAwaitedResult();
                                a = -1;
                                break $sm1;
                            default:
                                break $sm1
                        }
                    }
                    b.setResult(null)
                }
                catch (e) {
                    b.setException(ss.Exception.wrap(e))
                }
            });
            d();
            return b.task
        },
        $1: function() {
            return this.$4 || t.noUserAssignmentData
        },
        isUserAssignedToAssignment: function() {
            return this.$1().get_isAssignedToUser()
        },
        hasUserAlreadyCompletedAssignment: function(a) {
            return !s.$0(a) && this.$1().get_userHasTurnedInSubmission()
        },
        getStudentSubmissionState: function() {
            var a = new VEL.Wordwall.Core.Application.GoogleClassroomStudentSubmissionState();
            a.canTurnInSubmission = this.$1().get_userCanTurnInSubmission();
            a.hasTurnedInSubmission = this.$1().get_userHasTurnedInSubmission();
            return a
        },
        get_homeworkSubmission: function() {
            return this.$1$1
        },
        set_homeworkSubmission: function(a) {
            this.$1$1 = a
        },
        onTurnInStudentSubmission: function() {
            var a = 0,
                b = new ss.TaskCompletionSource(),
                c, d, e, f;
            var g = ss.mkdel(this, function() {
                try {
                    $sm1: for(;;) {
                        switch(a) {
                            case 0:
                                a = -1;
                                c = "Error when turning-in Google Classroom assignment";
                                a = 1;
                                continue $sm1;
                            case 1:
                            case 2:
                            case 3:
                                if(a === 1) {
                                    a = 2
                                }
                                try {
                                    $sm2: for(;;) {
                                        switch(a) {
                                            case 2:
                                                a = -1;
                                                d = this.turnInStudentSubmission();
                                                a = 3;
                                                d.continueWith(g);
                                                return;
                                            case 3:
                                                a = -1;
                                                d.getAwaitedResult();
                                                VEL.Wordwall.Global.Modules.playPage.onTurnedInGoogleClassroomStudentSubmission();
                                                a = -1;
                                                break $sm2;
                                            default:
                                                break $sm2
                                        }
                                    }
                                } catch (h) {
                                    h = ss.Exception.wrap(h);
                                    if(ss.isInstanceOfType(h, ss.PromiseException)) {
                                        e = ss.cast(h, ss.PromiseException);
                                        s.$1.reportGoogleClassroomError(Strings.myActivities_DefaultError, c, e)
                                    } else {
                                        f = h;
                                        s.$1.reportError$1(Strings.myActivities_DefaultError, c, f)
                                    }
                                }
                                a = -1;
                                break $sm1;
                            default:
                                break $sm1
                        }
                    }
                    b.setResult(null)
                }
                catch (h) {
                    b.setException(ss.Exception.wrap(h))
                }
            });
            g();
            return b.task
        },
        turnInStudentSubmission: function() {
            var a = 0,
                b = new ss.TaskCompletionSource(),
                c, d, e;
            var f = ss.mkdel(this, function() {
                try {
                    $sm1: for(;;) {
                        switch(a) {
                            case 0:
                                a = -1;
                                if(ss.isNullOrUndefined(this.get_homeworkSubmission())) {
                                    throw new ss.InvalidOperationException("No homework submission has been recorded for the current user.")
                                }
                                c = this.$2.$9(this.$1());
                                a = 1;
                                c.continueWith(f);
                                return;
                            case 1:
                                a = -1;
                                d = c.getAwaitedResult();
                                if(ss.isValue(d)) {
                                    e = ss.Task.fromPromise(this.$3.setGoogleClassroomStudentSubmission(this.get_homeworkSubmission().HomeworkSubmissionId, d.courseId, d.courseWorkId, d.id), 0);
                                    a = 2;
                                    e.continueWith(f);
                                    return
                                }
                                a = -1;
                                break $sm1;
                            case 2:
                                a = -1;
                                e.getAwaitedResult();
                                a = -1;
                                break $sm1;
                            default:
                                break $sm1
                        }
                    }
                    b.setResult(null)
                }
                catch (g) {
                    b.setException(ss.Exception.wrap(g))
                }
            });
            f();
            return b.task
        }
    }, null, [VEL.Wordwall.Core.Application.IGoogleClassroomApplication, VEL.Wordwall.Core.Application.IGoogleClassroomApplicationAssignment]);
    ss.initClass(t, k, {
        get_studentSubmission: function() {
            return this.$1$1
        },
        set_studentSubmission: function(a) {
            this.$1$1 = a
        },
        $1: function() {
            return ss.isValue(this.get_studentSubmission())
        },
        $0: function() {
            return ss.isValue(this.$2)
        },
        get_isAssignedToUser: function() {
            return this.$1() || this.$0()
        },
        get_userCanTurnInSubmission: function() {
            return this.$1()
        },
        get_userHasTurnedInSubmission: function() {
            return this.$1() && this.get_studentSubmission().state === "TURNED_IN"
        }
    });
    (function() {
        o.forcePseudo = false
    })();
    (function() {
        l.$0 = ".js-activity-wrapper"
    })();
    (function() {
        p.$3 = "test.doc";
        p.$2 = "test.config";
        p.$0 = "doc.value";
        p.$1 = 3145728
    })();
    (function() {
        t.noUserAssignmentData = new t(null, null)
    })();
    (function() {
        s.$1 = new VEL.Wordwall.Global.Helpers.GoogleClassroomErrorReporter("https://wordwall.net/scripts/saltarelle/vel.wordwall.application.client.js")
    })();
    (function() {
        n.$1 = false
    })()
})();
